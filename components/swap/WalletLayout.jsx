function WalletLayout() {
    return (
        <div
            className="card col-12 col-md-4 bg-dark text-white"
            style={{
            borderRadius: "20px"
        }}>
            <div
                className="card-header py-3 custom-light-bg"
                style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px"
            }}>
                <h2
                    className="text-center"
                    style={{
                    fontWeight: "bold",
                    fontSize: "30px"
                }}>Swap</h2>
                <p className="text-center">Swap your stable token to your $GROK tokens</p>

                <div className="d-flex justify-content-end ">
                    <i
                        className="fa fa-list"
                        style={{
                        fontSize: "20px"
                    }}></i>
                </div>
            </div>

            <div className="card-body">

            <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-start">
                        <div className="token-holder">
                            <div
                                style={{
                                backgroundImage: `url(${"https://cryptologos.cc/logos/tether-usdt-logo.svg?v=013"})`
                            }}
                                className="token-img"
                                alt=""></div>
                        </div>

                        <h5 className="ms-2 text-light">USDT</h5>

                        <i
                            className="fa fa-chevron-down ms-1 text-light"
                            style={{
                            fontSize: "15px",
                            color: "white"
                        }}></i>
                    </div>
                    <div>
                        Balance: 50.0
                    </div>
                </div>

            <div className="my-3 swap-input-cover">
                    <input
                        // value={0}
                        style={{
                        textAlign: "right",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "white"
                    }}
                        type="text"
                        className="form-control transparent bg-transparent border-transparent"
                        placeholder="0.0"
                        aria-describedby="help"/>
                    <div id="help" className="form-text text-end text-light my-3 me-4">Expected to receive: 10.5 $GRK</div>
                </div>

                <div className="d-grid gap-2">
                    <button
                        className={`btn btn-dark btn-lg`}
                        type="button"
                        style={{
                        fontWeight: "bold"
                    }}>{"Swap"}</button>
                </div>
            </div>

        </div>
    );
}

export default WalletLayout;