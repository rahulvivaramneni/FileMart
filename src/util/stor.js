// import { Web3Storage } from "web3.storage";
import axios from 'axios'
import { Web3Storage } from "web3.storage/dist/bundle.esm.min.js"; // webpack 4

const API_KEY = process.env.REACT_APP_STORAGE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGMzQjdFQjdDYzhEOGI3QTE4RUQ1YkM3ZGE3ODZiQmRCNkRhNTkwNzQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQ3Mzk3OTE4MjUsIm5hbWUiOiJmZXZtMjMifQ.i9kde69AKKn3PljfgANle9hI_6OZuOiJqcelIu8e8AY';

function getAccessToken() {
  return API_KEY;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

export async function uploadFiles(files, metadata) {
  const newFiles = [...files]
  if (metadata) {
    const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' })
    const metaFile = new File([blob], 'metadata.json')
    newFiles.push(metaFile)
  }
  const client = makeStorageClient();
  const cid = await client.put(newFiles);
  console.log("stored files with cid:", cid);
  return cid;
}

export const getMetadataJson = (baseUrl) => {
  const url = `${baseUrl}/metadata.json`;
  return axios.get(url);
};

export async function retrieveFiles(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }

  // request succeeded! do something with the response object here...

  return res;
}