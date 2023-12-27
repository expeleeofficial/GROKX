import SwapBox from "./swapBox";
import SWAP from "../../assets/swap1.png";
import LOGO from "../../assets/logo.png";

function SwapLayout() {
    return (
        <div
            className="card col-6"
            style={{
            borderRadius: "20px"
        }}>
            <div className="card-body">
                <div>
                    <h3>Swap Stable Token</h3>
                    <p>Add liquidity to the ETH/GROKX pool and receive LP tokens</p>
                </div>

                <hr className="my-2"/>

                <SwapBox token={{name:"BNB",logo:"https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013"}}/>

                <div className="d-flex justify-content-center">
                    <div className="icon-holder me-5">
                        <div
                            style={{
                            backgroundImage: `url(${SWAP})`
                        }}
                            className="icon-img"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#staticBackdrop"
                            aria-controls="staticBackdrop"
                            alt=""></div>
                    </div>
                </div>

                <SwapBox token={{name:"GROKX",logo:LOGO}}/>

                <div className="d-grid gap-2 my-3">
                    <button className="btn btn-primary" type="button">SWAP</button>
                </div>
            </div>
        </div>
    );
}

export default SwapLayout;