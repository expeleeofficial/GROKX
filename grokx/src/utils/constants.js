import { bscTestnet, bsc } from "viem/chains";
import LOGO from "../assets/logo.png";

export const tokensMap = {
  bsc: {
    chain: bsc,
    router: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    tokens: [
      {
        name: "BNB",
        logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013",
        address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
        balance: 0,
      },
      {
        name: "GROKX",
        logo: LOGO,
        address: "0xa7ffb399d44eb830f01751052C75d14f0b47E779",
        balance: 0,
      },
      {
        name: "USDT",
        logo: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=013",
        address: "0x55d398326f99059fF775485246999027B3197955",
        balance: 0,
      },
      {
        name: "BUSD",
        logo: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=013",
        address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        balance: 0,
      },
    ],
  },
  testnet: {
    chain: bscTestnet,
    router: "0xd99d1c33f9fc3444f8101754abc46c52416550d1",
    tokens: [
      {
        name: "BNB",
        logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013",
        address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
        balance: 0,
      },
      {
        name: "GROKX",
        logo: LOGO,
        address: "0xa716561A4DDe0E5c6504f92370edE4852721E486",
        balance: 0,
      },
      {
        name: "USDT",
        logo: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=013",
        address: "0x235ea4f6ba06c44e2de817a234052e19dd961fde",
        balance: 0,
      },
      {
        name: "BUSD",
        logo: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=013",
        address: "0x25d95a65e8db891116511672ebdabec33851c19b",
        balance: 0,
      },
    ],
  },
};
