import { useState } from "react";
import SwapBox from "./swapBox";
import SWAP from "../../assets/swap1.png";
import LOGO from "../../assets/logo.png";
import TokenModal from "./tokenModal";
import { tokensMap } from "../../utils/constants";

function SwapLayout({ allTokens, setSelectedToken, selectedToken }) {
  const [toGrokx, setToGrokx] = useState(true);
  const [show, setShow] = useState(false);
  const [rate, setRate] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="card col-12 col-md-5"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="card-body">
        <div>
          <h3>Swap Stable Token</h3>
          <p>Add liquidity to the ETH/GROKX pool and receive LP tokens</p>
        </div>
        <hr className="my-2" />{" "}
        {toGrokx ? (
          <SwapBox
            rate={rate}
            setRate={setRate}
            selectedToken={selectedToken}
            handleShow={handleShow}
            showRate={false}
          />
        ) : (
          <SwapBox
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
            rate={rate}
            setRate={setRate}
            selectedToken={tokensMap.testnet.tokens[1]}
            handleShow={handleShow}
            showRate={true}
            to={selectedToken}
          />
        ) : (
          <SwapBox
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
