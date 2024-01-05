import { useEffect, useState } from "react";
import SwapBox from "./swapBox";
import SWAP from "../../assets/swap1.png";
import TokenModal from "./tokenModal";
import { tokensMap } from "../../utils/constants";
import { useNetwork } from "wagmi";

function SwapLayout({ allTokens, setSelectedToken, selectedToken }) {
  const { chain: currentChain } = useNetwork();
  const [toGrokx, setToGrokx] = useState(true);
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(undefined);
  const [network, setNetwork] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    //   const acceptedChains =[97,56]
    console.log(currentChain.id);
    const acceptedChains = [97];
    setNetwork(acceptedChains.includes(currentChain.id));
  }, [currentChain]);

  return (
    <div
      className="card col-12 col-md-5"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">
        <div>
          <div className="d-flex justify-content-between">
            <h3>Swap Stable Token</h3>
            {!network && (
              <span class="badge text-bg-danger">Invalid Chain</span>
            )}
          </div>
          {/* <p>Add liquidity to the ETH/GROKX pool and receive LP tokens</p> */}
        </div>
        <hr className="my-2" />{" "}
        {toGrokx ? (
          <SwapBox
            network={network}
            rate={rate}
            setRate={setRate}
            selectedToken={selectedToken}
            handleShow={handleShow}
            showRate={false}
          />
        ) : (
          <SwapBox
            network
            rate={rate}
            setRate={setRate}
            selectedToken={tokensMap.testnet.tokens[1]}
            handleShow={handleShow}
            showRate={false}
          />
        )}
        <div className="d-flex justify-content-center">
          <div
            className="icon-holder me-5"
            onClick={() => setToGrokx(!toGrokx)}
          >
            <div
              style={{
                backgroundImage: `url(${SWAP})`,
              }}
              className="icon-img"
            ></div>
          </div>
        </div>
        {toGrokx ? (
          <SwapBox
            network
            rate={rate}
            setRate={setRate}
            selectedToken={tokensMap.testnet.tokens[1]}
            handleShow={handleShow}
            showRate={true}
            to={selectedToken}
          />
        ) : (
          <SwapBox
            network
            rate={rate}
            setRate={setRate}
            selectedToken={selectedToken}
            handleShow={handleShow}
            showRate={true}
          />
        )}
        <div className="d-grid gap-2 my-3">
          <button className="btn btn-custom" type="button">
            SWAP
          </button>
        </div>
        <TokenModal
          show={show}
          handleClose={handleClose}
          allTokens={allTokens}
          setSelectedToken={setSelectedToken}
        />
      </div>
    </div>
  );
}

export default SwapLayout;
