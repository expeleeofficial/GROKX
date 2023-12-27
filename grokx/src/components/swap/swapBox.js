function SwapBox({token}) {
    return (
        <div className="my-3 swap-box p-3">
            <div className="d-flex justify-content-between">
                <div className="col-6">
                    <p>Available {token.name}: 0.0 {token.name}</p>
                    <input
                        style={{
                        fontWeight: "bold",
                        fontSize: "25px",
                        background: "transparent"
                    }}
                        type="text"
                        className="form-control input-custom"
                        placeholder="0.0"
                        aria-describedby="help"/>
                </div>

                <div className="d-flex justify-content-start">
                    <div className="token-holder">
                        <div
                            style={{
                            backgroundImage: `url(${token.logo})`
                        }}
                            className="token-img"
                            alt=""></div>
                    </div>

                    <h5 className="ms-2">{token.name}</h5>

                    <i
                        hidden={token.name === "GROKX"}
                        className="fa fa-chevron-down mt-1 ms-1"
                        style={{
                        fontSize: "13px"
                    }}></i>
                </div>

            </div>
        </div>
    );
}

export default SwapBox;