import axios from "axios";
import { MD5 } from "crypto-js";

const PROXY_URL = 'https://http-proxy.fly.dev/proxy'

export const getTransactions = (chainId, address) => {
  const url = "https://graph-wallaby.glif.link/query"
  return axios.post(PROXY_URL, {
    url,
    type: 'POST',
    hash: MD5(window.location.origin).toString(),
    body:
    {"operationName":"Messages","variables":{"address":address,"limit":10,"offset":0},"query":"query Messages($address: String!, $limit: Int!, $offset: Int!) {\n  messages(address: $address, limit: $limit, offset: $offset) {\n    cid\n    to {\n      id\n      robust\n      __typename\n    }\n    from {\n      id\n      robust\n      __typename\n    }\n    nonce\n    height\n    method\n    params\n    value\n    __typename\n  }\n}"}
  })
}