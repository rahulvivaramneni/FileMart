import { formatDate } from "../util";

export const APP_NAME = 'FileMart'
export const APP_DESC = 'Peer-to-Peer Decentralized Digital Marketplace powered by Filecoin blockchain & FVEM smart contracts'

const hostname = window.location.hostname
export const IS_LOCAL = hostname.indexOf("localhost") !== -1

export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY ||"abc"; // covalent api key

export const EXAMPLE_FORM = {
    'title': 'Blockchain cheat sheet pdf',
    'description': 'It is an introductory, easy-to-digest cheat sheet for anyone who wants to learn a little more about cryptocurrencies.',
    'dataUrl': 'bafybeid7qdfukeqgzsnnaho66lgh6roh6s7fhzb3v3opys2qoukozmpvha',
    'keywords': 'blockchain, web3, cheat sheet, blochain basics, Filecoin',
    'createdAt': formatDate(),
    'priceEVM': 0.01,
    'files': []
}

export const updateForm = (f) => EXAMPLE_FORM = {...EXAMPLE_FORM, ...f}
export const getExampleResponse = () => ({
  ...EXAMPLE_FORM,
  purchases: 0,
})


export const WEB3_PROJECT_ID = process.env.REACT_APP_WC_ID || '751e3085410526a3939608c6a074e28d';

export const CHAIN_OPTIONS = {
  3141: {
      name: "Filecoin - Hyperspace testnet",
      symbol: "tFIL",
      url: "https://hyperspace.filfox.info/en/",
      blockExplorers: ["https://hyperspace.filfox.info/en/"],
      id: 3141,
      rpcUrls: ['https://api.hyperspace.node.glif.io/rpc/v0']
    }
  };
  
  export const ACTIVE_CHAIN = CHAIN_OPTIONS[process.env.REACT_APP_ACTIVE_CHAIN_ID || "3141"];
  
  export const IPFS_BASE_URL = "https://ipfs.io/ipfs"