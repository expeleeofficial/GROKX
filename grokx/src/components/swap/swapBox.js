import { useCallback, useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import Web3Utils from "../../utils";
import { getNetwork } from "@wagmi/core";
import { tokensMap } from "../../utils/constants";
import Spinner from "react-bootstrap/esm/Spinner";

function SwapBox({
  handleShow,
  selectedToken,
  showRate,
  to = undefined,
  rate,
  setRate,
}) {
  const { address, isConnected } = useAccount();
  const { data } = useBalance({ address });
  const [balance, setBalance] = useState(undefined);

  const [network, setNetwork] = useState(undefined);

  const [swapAmount, setSwapAmount] = useState(0.01);
  const [loadingRate, setLoadingRate] = useState(false);

  const getRate = useCallback(
    async (amount) => {
      setLoadingRate(true);
      const { name: selectedName, address: selectedAddress } = selectedToken;
      const swapTokens =
        selectedName === "GROKX"
          ? [to && to.address, tokensMap.testnet.tokens[1].address]
          : [tokensMap.testnet.tokens[1].address, selectedAddress];
      const token1 = swapTokens[0];
      const token2 = swapTokens[1];
      console.log(amount);
      const utils = new Web3Utils(address);
      setRate(await utils.getSwapPrice(amount, [token1, token2]));
      setLoadingRate(false);
    },
    [address, selectedToken, to, setRate]
  );

  const getSelectedBalance = useCallback(async () => {
    const { name, address: erc20Address } = selectedToken;
    const { formatted } = data;
    const utils = new Web3Utils(address);
    if (name === "BNB") {
      setBalance(parseFloat(formatted).toFixed(3));
    } else {
      setBalance(await utils.getERC20Balance(erc20Address, address));
    }
  }, [address, selectedToken, data]);

  useEffect(() => {
    if (isConnected) {
      getRate(swapAmount);
      getSelectedBalance();
      setNetwork(getNetwork());
    }
  }, [
    getRate,
    getSelectedBalance,
    selectedToken,
    isConnected,
    showRate,
    to,
    swapAmount,
  ]);
  return (
    <div className="my-3 swap-box p-3">
      <div className="d-flex justify-content-between">
        <div className="col-12 col-md-6">
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "white" }}>
            Available : {balance} {selectedToken.name}
          </p>
          {showRate ? (
            <div>
              {loadingRate ? (
                <Spinner
                  animation="border"
                  variant="light"
                  style={{ height: "10px", width: "10px" }}
                />
              ) : (
                <p style={{ color: "white" }}>
                  You will receive {rate} {selectedToken.name}
                </p>
              )}
            </div>
          ) : (
            <input
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                background: "transparent",
                color: "white",
              }}
              type="number"
              className="form-control input-custom"
              placeholder="0.0"
              value={swapAmount}
              onChange={(e) => {
                setSwapAmount(e.target.value);
                getRate(e.target.value);
                console.log(e.target.value);
              }}
              aria-describedby="help"
            />
          )}
        </div>

        <div className="d-flex justify-content-start">
          <div className="token-holder">
            <div
              style={{
                backgroundImage: `url(${selectedToken.logo})`,
              }}
              className="token-img"
              alt=""
            ></div>
          </div>

          <h5 className="ms-2" style={{ color: "white" }}>
            {selectedToken.name}
          </h5>

          <i
            hidden={selectedToken.name === "GROKX"}
            onClick={handleShow}
            className="fa fa-chevron-down mt-1 ms-1"
            style={{
              fontSize: "13px",
              color: "white",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default SwapBox;
