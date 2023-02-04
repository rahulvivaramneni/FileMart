import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {  Layout, Menu, } from "antd";

//import Home  from "./components/HomePage";
import HomePage from "./components/HomePage";
import {
  QuestionCircleOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { About } from "./components/About";
import Roadmap from "./components/Roadmap";
import { ACTIVE_CHAIN, APP_DESC, APP_NAME, COVALENT_KEY } from "./constants";
import Lookup from "./components/PurchaseListing";

import UploadListing from "./components/UploadListing";
import { Web3Button } from "@web3modal/react";
import {useAccount, useNetwork} from 'wagmi'
import { abbreviate } from "./util";

import './App.css';
import 'antd/dist/antd.css';
import PurchaseListing from "./components/PurchaseListing";

const { Header, Footer,  Content } = Layout;

function App() {
  const navigate = useNavigate()
  const {account, isReady} = useAccount() // https://web3modal.com/hooks/use-account
  const { network } = useNetwork()

  // const height = window.innerHeight - 120;

  const pathname = window.location.pathname

  const isListingPage = pathname.indexOf('/listing/') !== -1
//   <span className="web3-button">
//   <Web3Button />
// </span>
  return (
    <div className="App">
          
          <Content>
          
            <div>
           
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                {/* <Route path="/carbon-map" element={<HomePage/>}/> */}
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/upload" element={<UploadListing account={account} network={network}/>}/>
                <Route exact path="/listing/:contractAddress" element={<PurchaseListing account={account} network={network} />}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/roadmap" element={<Roadmap/>}/>


              </Routes>
            </div>
          </Content>

         
      </div>
  );
}

export default App;
