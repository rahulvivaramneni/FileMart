import React, { useEffect, useState } from "react";
import { Button, Input,Card, Row, Col, Steps, Result } from "antd";
import { datamarketUrl, ipfsUrl, getExplorerUrl, humanError, } from "../util";
import { ACTIVE_CHAIN, APP_NAME, EXAMPLE_FORM, updateForm } from "../constants";
import { FileDrop } from "./FileDrop/FileDrop";
import { uploadFiles } from "../util/stor";
import { deployContract } from "../contract/dataContract";
import { useSigner } from "wagmi";
import TextArea from "antd/lib/input/TextArea";
import FileUploadArea from "./FileDrop/FileUploadArea.tsx";
import "./LightModeSignUp2.css";
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import logo from "../assets/success.gif"

import { Web3Button } from "@web3modal/react";

const queryParameters = new URLSearchParams(window.location.search)
const listingType = queryParameters.get("type") || ""

const { Step } = Steps;

function UploadListing({network, account}) {
  const { data: signer, error: signerError, isLoading: signerLoading, refetch } = useSigner()

  useEffect(() => {
    const networkId = network?.chain?.id
    console.log('network', network)
    if (networkId) {
      refetch()
    }
  }, [network, account])

  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const setDemo = () => setData({...EXAMPLE_FORM})

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const getActiveError = (data) => {
    if (!data.title || !data.description || !data.priceEVM) {
      return "Please provide a name, description, price for the item.";
    }

    if (!data.files || (data.files || []).length === 0) {
      return "Must add at least one file";
    }

    return undefined
  };

  const errMessage = getActiveError(data);

  const create = async () => {
    setError(undefined);

    if (errMessage) {
      setError(errMessage)
      return;
    }

    if (!signer) {
      setError(`Please connect a valid ${ACTIVE_CHAIN.name} wallet`);
      return;
    }

    setLoading(true);
    const body = { ...data };

    // Format files for upload.
    const files = (body.files || []).map((x) => {
      return x;
    });

    let res = { ...data };

    try {
      // 2) Upload files/metadata to ipfs.
      let cid = '';
      if (files && files.length > 0) {
        cid = await uploadFiles(
          files,
          res
        );
      }

      // 3) return shareable url.
      const contract = await deployContract(signer, data.title, data.description, cid, data.priceEVM, data.keywords)
      // 1) deploy base contract with metadata,

      res["datamarketUrl"] = datamarketUrl(contract.address);
      res["dataUrl"] = cid
      res["contract"] = contract.address;
      res["contractUrl"] = getExplorerUrl(contract.address);

      // Result rendered after successful doc upload + contract creation.
      setResult(res);
      updateForm(res)
    } catch (e) {
      console.error("error creating listing request", e);
      const message = e.reason || e.response?.message || e.message
      setError(humanError(message))
    } finally {
      setLoading(false)
    }
  };

  const getStep = () => {
    if (!!result) {
      return 2;
    } else if (!errMessage) {
      return 1;
    }
    return 0;
  };

  return (
    <div>
    <div className="navbar">
        <div className="frame">
          <div className="frame1">
            <div className="rectangle" />
            <div className="rectangle1" />
            <div className="rectangle2" />
            <div className="pricing">Pricing</div>
            <a className="blog" href=".blog">
              Blog
            </a>
            <a className="my-listings" href="../upload">
              My Listings
            </a>
            <a className="about-us" href="../about">
              About Us
            </a>
            <a className="roadmap" href="../roadmap">
              Roadmap
            </a>
          </div>
          <a className="frame2">
            <button className="sartsellingbutton">
              <div className="rectangle3" style={{backgroundColor:"#2E87E5"}} />
              <div className="connect-wallet" style={{backgroundColor:"#2E87E5"}} ><Web3Button /></div>
              
            </button>
          </a>
        </div>
      </div>
      <div>
        <Col span={100}>
          <div className="light-mode-sign-up-2">
          <div className="inputs-parent">
            {!result && <><h2>Create new {listingType.toLocaleUpperCase()} listing</h2>
            <a href="#" onClick={e => {
              e.preventDefault()
              setDemo()
            }}>.</a>
            <br />

            <h5>Name</h5>
            <Input style= {{border: "2px solid #23262f"}}
            className="input-light"
              placeholder="Name of listing"
              value={data.title}
              onChange={(e) => updateData("title", e.target.value)}
            />
            <br/>
            <br/>

            <h5>Description</h5>
            <Input style= {{border: "2px solid #23262f"}}
            className="input-light"
              aria-label="Description"
              onChange={(e) => updateData("description", e.target.value)}
              placeholder="Add additional description on the file/data"
              value={data.description}
            />
            <br/>
            <br/>

            <h5>Price in $TFIL</h5>
            <Input style= {{border: "2px solid #23262f"}}
            className="input-light"
              placeholder="example: 10 $TFIL"
              value={data.priceEVM}
              onChange={(e) => updateData("priceEVM", e.target.value)}
            />
            <br/>
            <br/>

            <h5>Keywords</h5>
            <Input style= {{border: "2px solid #23262f"}}
            className="input-light"
              placeholder="example: FEVM handbook, GTA cheat codes, Wild Life photos, Productivity Tips, DSA questions.... "
              value={data.keywords}
              onChange={(e) => updateData("keywords", e.target.value)}
            />
            <br/>

            {/* TODO: add configurable amount of items */}
            <h5 className="vertical-margin">Files</h5>
            <FileDrop
              files={data.files || []}
              setFiles={(files) => updateData("files", files)}
            />

            <Button
              type="primary"
              className="standard-button"
              onClick={create}
              disabled={loading || errMessage}
              loading={loading}
              size="large"
            >
              Create Listing
            </Button>
            {!error && !result && loading && (
              <span>&nbsp;Sit tight, we're brewing your request like a beer.☺️</span>
            )}
            <br />
            <br />
            </>}
            </div>
            {result && (<Card style={{backgroundColor:"#FFC900"}}><div>
            <img width={"280px"}  alt="" src={logo} />
              <h2 align="center">Listing Created</h2>
           
              <div>
                <a href={ipfsUrl(result.dataUrl)} target="_blank">
                  View listed files
                </a>
                <br />
                <a href={result.contractUrl} target="_blank">
                  Transaction details (contract)
                </a>
                <br />
                <br />
                <p>
                  Share the link with your followers who want to buy
                  <br />
                  <a href={result.datamarketUrl} target="_blank">
                    View listing/sales page
                  </a>
                </p>
              </div>
              </div>
              </Card>)}
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={0}>
        
        </Col>
      </div>
    </div>
  );
}

UploadListing.propTypes = {};

export default UploadListing;
