import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_DESC, APP_NAME } from "../constants"
import Card from "antd/lib/card"


export const About = () => {
        return (
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFC900",
              width: "100%",
              height: "1000px",
              overflow: "hidden",
              textAlign: "left",
              fontSize: "13px",
              color: "#000",
              fontFamily: "Ribeye",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "221px",
                left: "68px",
                lineHeight: "16px",
                color: "#222",
                display: "inline-block",
                width: "941px",
                height: "349px",
              }}
            >
              <p
                style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}
              >{`Hello User, `}</p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>&nbsp;</p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                Our platform is a decentralized marketplace where individuals can buy
                and sell digital products such as college notes, music, 3D pictures,
                designs, audio books, and e-books using the Filecoin blockchain and
                FEVM smart contracts. Unlike traditional data exchange platforms, our
                platform does not require long term commitments or the use of
                intermediaries, resulting in lower fees and no staff overhead.
              </p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>&nbsp;</p>
              <p
                style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}
              >{`Users can create data pages that serve as purchase pages for secured IPFS datasets. Our platform is self-governing, meaning that if a fraudulent dataset is uploaded and sold, it can be flagged by a purchaser or potential purchaser. After three flags, the dataset page is locked. `}</p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>&nbsp;</p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                To ensure that the data provides user satisfaction, the user is only
                paid out from the contract after three non-flagged successful sales
                and each sale after that, this is done automatically via logic tied to
                the purchaseData contract method.
              </p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                Each dataset cannot be modified after it is posted, but the price can
                be updated by the owner and it can be marked as inactive. A new page
                should be created if a dataset needs to be changed in order to protect
                the mutability and trust of existing pages.
              </p>
              <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>&nbsp;</p>
              <p style={{ margin: "0" }}>
                By using FEVM smart contracts, our platform can enable an immutable,
                append-only, history of interactions against the smart contracts,
                store data in a scalable and low-cost way for data owners, and perform
                low cost, high volume, and fast transactions on the FEVM network.
                Additionally, the platform is self-governing by the user base and can
                flag or shut down any fraudulent pages by logic included in the FEVM
                smart contract
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "593px",
                left: "69px",
                width: "174px",
                height: "16px",
                color: "#1111ff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  lineHeight: "16px",
                }}
              >
                W:
              </div>
              <a
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "21px",
                  textDecoration: "underline",
                  lineHeight: "16px",
                  color: "#222",
                }}
                href="http://filemart-7b3f4b.spheron.app/"
                target="_blank"
              >
                filemart-7b3f4b.spheron.app
              </a>
            </div>
            <div
              style={{
                position: "absolute",
                top: "187.81px",
                left: "68px",
                backgroundColor: "#3e64ff",
                width: "43.64px",
                height: "1.64px",
              }}
            />
            <i
              style={{
                position: "absolute",
                top: "154.79px",
                left: "68px",
                fontSize: "35px",
              }}
            >
              About Us
            </i>
            <div
              style={{
                position: "absolute",
                top: "569.75px",
                left: "67.75px",
                borderTop: "0.5px solid rgba(0, 0, 0, 0.3)",
                boxSizing: "border-box",
                width: "466.5px",
                height: "0.5px",
              }}
            />
           
          </div>
        );
      };
      
      
