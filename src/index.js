import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {  APP_NAME, CHAIN_OPTIONS, WEB3_PROJECT_ID } from './constants';
import { Web3Modal } from '@web3modal/react';
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from 'wagmi'

import './index.css';

// https://docs.walletconnect.com/2.0/web3modal/react/installation
const chains = Object.values(CHAIN_OPTIONS)

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: WEB3_PROJECT_ID }),
]);


const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: APP_NAME, chains }),
  provider,
});

// Web3Modal Ethereum ^
const ethereumClient = new EthereumClient(wagmiClient, chains);

// https://web3modal.com/hooks


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <WagmiConfig client={wagmiClient}>
          <App />
        </WagmiConfig>
        
        <Web3Modal
        projectId={WEB3_PROJECT_ID}
        theme="light"
        accentColor="default"
        ethereumClient={ethereumClient}
      />
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
