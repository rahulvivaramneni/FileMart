import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_DESC, APP_NAME } from "../constants"
import Card from "antd/lib/card"


export const About = () => {
    return <Card className="frame1">
    <h1>About Us:</h1>
   <p> Our platform is a decentralized marketplace where individuals can buy and sell digital products such as college notes, music, 3D pictures, designs, audio books, and e-books using the Filecoin blockchain and FEVM smart contracts. Unlike traditional data exchange platforms, our platform does not require long term commitments or the use of intermediaries, resulting in lower fees and no staff overhead.

    Users can create data pages that serve as purchase pages for secured IPFS datasets. Our platform is self-governing, meaning that if a fraudulent dataset is uploaded and sold, it can be flagged by a purchaser or potential purchaser. After three flags, the dataset page is locked. To ensure that the data provides user satisfaction, the user is only paid out from the contract after three non-flagged successful sales and each sale after that, this is done automatically via logic tied to the purchaseData contract method.
    
    Each dataset cannot be modified after it is posted, but the price can be updated by the owner and it can be marked as inactive. A new page should be created if a dataset needs to be changed in order to protect the mutability and trust of existing pages.
    
    By using FEVM smart contracts, our platform can enable an immutable, append-only, history of interactions against the smart contracts, store data in a scalable and low-cost way for data owners, and perform low cost, high volume, and fast transactions on the FEVM network. Additionally, the platform is self-governing by the user base and can flag or shut down any fraudulent pages by logic included in the FEVM smart contract
    </p></Card>
}