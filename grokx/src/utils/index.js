// import {prepareWriteContract, readContract, writeContract, waitForTransaction} from "@wagmi/core";
// import {
//     ALLOWANCE_ABI,
//     APPROVE_ABI,
//     BALANCE_OF_ABI,
//     DECIMALS_ABI,
//     GET_AMOUNTS_OUT_ABI,
//     ROUTER_ABI
// } from "./abis";
// import {parseUnits, formatUnits, Interface} from "ethers";
// import axios from "axios";

// export default class Web3Utils {
//     ROUTER_ADDRESS = "0xd99d1c33f9fc3444f8101754abc46c52416550d1"; // Testnet
//     // SCB_VAULT = "0x6AD0f723668F1f85fdf69342665d6Ed6267A73C9"
//     EXPLORER_URL = "https://api-testnet.bscscan.com/api?module=logs&action=getLogs&topic0=0x1ab1cbe1" +
//             "3cd8600861750d1e66621badf6b7b2d1443493b5e7845da6f35757b7&address=0x6AD0f723668F1" +
//             "f85fdf69342665d6Ed6267A73C9"
//     constructor(address) {
//         this.address = address;
//     }

//     async removeShares(amount) {
//         try {
//             const community = amount * this.COMMUNITY_SHARES;
//             return {
//                 community,
//                 remainder: amount - community
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     async getSwapPrice(amount, path) {

//         try {
//             const decimals0 = await this.getDecimal(path[0])

//             if (parseFloat(amount) <= 0) {
//                 console.log("Amount must be greater than 0")
//                 return
//             }

//             const amount0 = parseUnits(amount.toString(), decimals0)
//             const data = await readContract({
//                 address: this.ROUTER_ADDRESS,
//                 abi: GET_AMOUNTS_OUT_ABI,
//                 functionName: "getAmountsOut",
//                 args: [amount0, path]
//             });
//             const decimals1 = await this.getDecimal(path[1])
//             const price = parseFloat(formatUnits(data[1], decimals1)).toFixed(15)
//             return price

//         } catch (e) {
//             console.log(e);
//         }
//     }

//     async getDecimal(address) {
//         try {
//             const data = await readContract({address: address, abi: DECIMALS_ABI, functionName: "decimals", args: []});

//             return data

//         } catch (e) {
//             console.log(e)
//         }
//     }

//     async getERC20Balance(token, address) {
//         try {
//             const data = await readContract({address: token, abi: BALANCE_OF_ABI, functionName: "balanceOf", args: [address]});
//             const decimals = await this.getDecimal(token)
//             const balance = parseFloat(formatUnits(data, decimals)).toFixed(3)
//             console.log(balance)
//             return balance
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     async getAllowance(token, address) {
//         try {
//             const data = await readContract({
//                 address: token,
//                 abi: ALLOWANCE_ABI,
//                 functionName: "allowance",
//                 args: [address, this.SCB_VAULT]
//             });
//             const decimals = await this.getDecimal(token)
//             const allowance = parseFloat(formatUnits(data, decimals)).toFixed(3)
//             console.log(allowance)
//             return allowance
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     async approveVault(token, amount) {
//         try {
//             const decimals = await this.getDecimal(token)
//             const quantizedAmount = parseUnits(amount.toString(), decimals).toString()
//             const config = await prepareWriteContract({
//                 address: token,
//                 abi: APPROVE_ABI,
//                 functionName: "approve",
//                 args: [this.SCB_VAULT, quantizedAmount]
//             });
//             const {hash} = await writeContract(config);
//             await waitForTransaction({hash});
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     async deposit(amount, token = undefined, isBUSD = false) {
//         try {
//             if (token) {
//                 if (isBUSD) {
//                     const decimals = await this.getDecimal(token)
//                     const quantizedAmount = parseUnits(amount.toString(), decimals).toString()
//                     const config = await prepareWriteContract({address: this.SCB_VAULT, abi: DEPOSIT_BUSD_ABI, functionName: "depositBUSD", args: [quantizedAmount]});
//                     const {hash} = await writeContract(config);
//                     await waitForTransaction({hash});
//                 } else {
//                     const decimals = await this.getDecimal(token)
//                     const quantizedAmount = parseUnits(amount.toString(), decimals).toString()
//                     const config = await prepareWriteContract({
//                         address: this.SCB_VAULT,
//                         abi: DEPOSIT_TOKEN_ABI,
//                         functionName: "depositToken",
//                         args: [quantizedAmount, token]
//                     });
//                     const {hash} = await writeContract(config);
//                     await waitForTransaction({hash});
//                 }
//             } else {
//                 const decimals = 18
//                 const quantizedAmount = parseUnits(amount.toString(), decimals).toString()
//                 const config = await prepareWriteContract({address: this.SCB_VAULT, abi: DEPOSIT_ABI, functionName: "deposit", args: [], value: quantizedAmount});
//                 const {hash} = await writeContract(config);
//                 await waitForTransaction({hash});
//             }
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     async swap(amount, path) {
//         try {
//             const decimals = await this.getDecimal(path[0])
//             const quantizedAmount = parseUnits(amount.toString(), decimals).toString()
//             const config = await prepareWriteContract({
//                 address: this.ROUTER_ADDRESS,
//                 abi: ROUTER_ABI,
//                 functionName: "swapExactETHForTokens",
//                 args: [0, path, this.address, Date.now() + 1000 * 60 * 10],
//                 value: quantizedAmount
//             });
//             const {hash} = await writeContract(config);
//             await waitForTransaction({hash});
//         } catch (e) {
//             console.log(e)
//         }

//     }

//     async swapTokens(amount, path) {
//         try {
//             const decimals = await this.getDecimal(path[0])
//             const quantizedAmount = parseUnits(amount.toString(), decimals).toString()
//             const config = await prepareWriteContract({
//                 address: this.ROUTER_ADDRESS,
//                 abi: ROUTER_ABI,
//                 functionName: "swapExactTokensForTokens",
//                 args: [quantizedAmount, 0, path, this.address, Date.now() + 1000 * 60 * 10]
//             });
//             const {hash} = await writeContract(config);
//             await waitForTransaction({hash});
//         } catch (e) {
//             console.log(e)
//         }

//     }

// }