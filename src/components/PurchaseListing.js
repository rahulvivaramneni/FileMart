import { Web3Button } from '@web3modal/react'
import {useSigner} from 'wagmi'
import { Button, Card, Modal, Result, Spin } from 'antd'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getExampleResponse } from '../constants'
import { flagDataset, getMetadata, purchaseDataset } from '../contract/dataContract'
import { getExplorerUrl, ipfsUrl } from '../util'
import TextArea from 'antd/lib/input/TextArea'
import NavBar from './NavBar'

export default function PurchaseListing({network, account}) {
  const { data: signer, error: signerError, isLoading, refetch } = useSigner()

  const [error, setError] = useState()
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)
  const [dataset, setDataset] = useState()
  const [reason, setReason] = useState()
  const [flagModal, setFlagModal] = useState(false)

  const params = useParams()
  const {contractAddress} = params

  async function flag() {
    setError('')
    setLoading(true)
    try {
      const res = await flagDataset(signer, contractAddress, reason)
      // const res = await flagDataset(signer, contractAddress, "tst")
      console.log('res', res)
      setResult({...res, dataUrl: dataset?.dataUrl})
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
      setFlagModal(false)
    }
  }

   async function purchase() {
    // TODO: add error check for preset location if user denied permission or location not retrievable.
    setLoading(true)
    setError('')
    const {priceEVM} = dataset
    try {
      const res = await purchaseDataset(signer, contractAddress, priceEVM)
      // const res = await flagDataset(signer, contractAddress, "tst")
      console.log('res', res)
      setResult({...res, dataUrl: dataset?.dataUrl})
      console.log(dataset)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  } 

  async function getDatasetInfo() {
    setError(undefined)
    setLoading(true)
    try {
      const res = await getMetadata(signer, contractAddress);
      setDataset(res.json()?.data || {})
      // console.log(res.json())
    } catch (e) {
      console.error('error fetching record', e)
      let { message } = e
      // setError(humanError(message))
      setDataset(getExampleResponse())
    } finally {
      setLoading(false)
    }
  }
console.log(dataset)
  useEffect(() => {
    if (signer) {
      getDatasetInfo()
    }
  }, [contractAddress, signer])

  if (loading) {
    return <Spin size="large" className='boxed'/>
  }

  const isReady = !loading && dataset?.priceEVM


  if (error && !isReady) {
    return <div className='error-text boxed'>
      {error}
    </div>
  }


  return (
    <div height= "100%">
    <NavBar/>
    <div  style={{backgroundColor:"#FFC900"}}>
    <div className='boxed purchase-page' >
      <Card bordered='true' style={{backgroundColor:"#FFC900"}} title={  <span className='centered success-text'>Files available for purchase</span>}>

      {dataset && <div className='centered card boxed'>
        <h1 style={{ marginBottom: '2em'}} >{dataset.title}</h1>
        <p style={{fontSize:'20px', textAlign: 'left', marginLeft: '20em',marginRight:'6.5em'}}><strong>Description: </strong>{dataset.description}</p>
        {dataset.createdAt && <p style={{fontSize:'20px',textAlign: 'left', marginLeft: '20em'}}><strong>Listed at: </strong> {dataset.createdAt}</p>}
        {dataset.priceEVM && <p style={{fontSize:'20px',textAlign: 'left', marginLeft: '20em'}}><strong>Price: </strong> {dataset.priceEVM} TFIL</p>}

        <p style={{fontSize:'20px',textAlign: 'left', marginLeft: '20em'}}><strong> Keywords: </strong>{dataset.keywords}</p>
        <br/>
       


      {isReady && !result && <Button style={{fontSize: '26px',height:"65px"}} type="primary" size="large" loading={loading} onClick={purchase}>
        Purchase dataset
      </Button>}

      <p><a href="#" onClick={(e) => {
        e.preventDefault()
        setFlagModal(true)
      }}> <p style={{textAlign:"center", marginLeft: '0em',marginTop: '1em'}}>Flag Files</p></a></p>

      {!isReady && <div><Web3Button/></div>}
      <br/>
      {error && <p className='error-text'>{error}</p>}
      {result && <><hr style={{height:"20%"}}></hr><Result status="success" title="Dataset purchased!"
      subTitle={"Use the link below to access your data"}
        extra={[
      <Button type="primary" key="console" onClick={() => {
        window.open(ipfsUrl(result.dataUrl), "_blank")
      }}>
        Access dataset contents
      </Button>,
      <Button type="secondary" key="console" onClick={() => {
        window.open(getExplorerUrl(result.hash, true), "_blank")
      }}>
        View transaction
      </Button>,
    ]}/></>}

      </div>}

      </Card>

      <Modal title={`Flag listing`} open={flagModal} onOk={flag} onCancel={() => setFlagModal(false)}>
        {dataset?.title && <p><b>Listing: {dataset.title}</b></p>}
        <p>Flag this File if you know or believe the contents to be invalid.</p>
        <p>Your account address will be recorded.</p>
        <h5>Reason</h5>
        <TextArea
              aria-label="Flag Reason"
              onChange={(e) => setReason(e.target.value)}
              placeholder="Your reason for flagging this listing"
              value={reason}
            />
      </Modal>

    </div></div></div>
  )
}
