import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xDBBD0c116BDbd2F1586a711E05fE4B5526e209A2"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/N10tYSNDkvkW0eu7FTdFV51gItQAsYYK",
  },
};