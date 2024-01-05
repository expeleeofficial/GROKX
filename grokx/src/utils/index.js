import {
  prepareWriteContract,
  readContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";
import {
  ALLOWANCE_ABI,
  APPROVE_ABI,
  BALANCE_OF_ABI,
  DECIMALS_ABI,
  GET_AMOUNTS_OUT_ABI,
  ROUTER_ABI,
} from "./abi";
import { parseUnits, formatUnits } from "ethers";

export default class Web3Utils {
  constructor(address) {
    this.address = address;
    this.ROUTER_ADDRESS = "0xd99d1c33f9fc3444f8101754abc46c52416550d1";
  }

  async getSwapPrice(amount, path) {
    try {
      const WETH = await this.getWETHAddress();
      let newPath;
      if (WETH === path[0] || WETH === path[1]) {
        newPath = path;
      } else {
        newPath = [path[0], WETH, path[1]];
      }

      const decimals0 =
        path[0] === WETH ? 18 : await this.getDecimal(newPath[0]);

      if (parseFloat(amount) <= 0) {
        console.log("Amount must be greater than 0");
        return;
      }

      const amount0 = parseUnits(amount.toString(), decimals0).toString();
      const data = await readContract({
        address: this.ROUTER_ADDRESS,
        abi: GET_AMOUNTS_OUT_ABI,
        functionName: "getAmountsOut",
        args: [amount0, newPath],
      });
      const lastPath = path.length > 2 ? newPath[2] : newPath[1];
      const decimals1 = await this.getDecimal(lastPath);
      const bigNum = data.length > 2 ? data[2] : data[1];
      const price = parseFloat(formatUnits(bigNum, decimals1)).toFixed(15);
      return price;
    } catch (e) {
      console.log(e);
    }
  }

  async getWETHAddress(address) {
    try {
      const data = await readContract({
        address: this.ROUTER_ADDRESS,
        abi: ROUTER_ABI,
        functionName: "WETH",
        args: [],
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getDecimal(address) {
    try {
      const data = await readContract({
        address: address,
        abi: DECIMALS_ABI,
        functionName: "decimals",
        args: [],
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async getERC20Balance(token, address) {
    try {
      const data = await readContract({
        address: token,
        abi: BALANCE_OF_ABI,
        functionName: "balanceOf",
        args: [address],
      });
      const decimals = await this.getDecimal(token);
      const balance = parseFloat(formatUnits(data, decimals)).toFixed(3);
      return balance;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllowance(token, address) {
    try {
      const data = await readContract({
        address: token,
        abi: ALLOWANCE_ABI,
        functionName: "allowance",
        args: [address, this.SCB_VAULT],
      });
      const decimals = await this.getDecimal(token);
      const allowance = parseFloat(formatUnits(data, decimals)).toFixed(3);
      console.log(allowance);
      return allowance;
    } catch (e) {
      console.log(e);
    }
  }

  async approveRouter(token, amount) {
    try {
      const decimals = await this.getDecimal(token);
      const quantizedAmount = parseUnits(
        amount.toString(),
        decimals
      ).toString();
      const config = await prepareWriteContract({
        address: token,
        abi: APPROVE_ABI,
        functionName: "approve",
        args: [this.ROUTER_ADDRESS, quantizedAmount],
      });
      const { hash } = await writeContract(config);
      await waitForTransaction({ hash });
    } catch (e) {
      console.log(e);
    }
  }

  async swapEth(amount, path) {
    try {
      const decimals = await this.getDecimal(path[0]);
      const quantizedAmount = parseUnits(
        amount.toString(),
        decimals
      ).toString();
      const config = await prepareWriteContract({
        address: this.ROUTER_ADDRESS,
        abi: ROUTER_ABI,
        functionName: "swapExactETHForTokens",
        args: [0, path, this.address, Date.now() + 1000 * 60 * 10],
        value: quantizedAmount,
      });
      const { hash } = await writeContract(config);
      await waitForTransaction({ hash });
    } catch (e) {
      console.log(e);
    }
  }

  async swapTokens(amount, path) {
    try {
      const decimals = await this.getDecimal(path[0]);
      const quantizedAmount = parseUnits(
        amount.toString(),
        decimals
      ).toString();
      const config = await prepareWriteContract({
        address: this.ROUTER_ADDRESS,
        abi: ROUTER_ABI,
        functionName: "swapExactTokensForTokens",
        args: [
          quantizedAmount,
          0,
          path,
          this.address,
          Date.now() + 1000 * 60 * 10,
        ],
      });
      const { hash } = await writeContract(config);
      await waitForTransaction({ hash });
    } catch (e) {
      console.log(e);
    }
  }
}
