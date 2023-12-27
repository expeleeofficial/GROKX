function StakeLayout() {
    return (
        <div
            className="card col-6"
            style={{
            borderRadius: "20px"
        }}>

            <div className="card-body">
                <div>
                    <h3>Stake</h3>
                    <p>Stake GROKX/ETH-LP Tokens to earn</p>
                </div>

                <hr className="my-2"/>

                <div className="d-flex justify-content-between my-5">
                    <div>APR</div>
                    <div>---</div>
                </div>

                <div className="d-flex justify-content-between my-5">
                    <div>EARN</div>
                    <div>GROKX + FEES </div>
                </div>

                <div className="d-flex justify-content-between my-5">
                    <div>GROKXX EARNED</div>
                    <div>0.0000</div>
                </div>

                <div className="d-flex justify-content-between my-5">
                    <div>GROKX-BNB STAKED</div>
                    <div>0.0000</div>
                </div>

                <div className="d-grid gap-2 my-3">
                    <button className="btn btn-primary" type="button">STAKE</button>
                </div>
            </div>
        </div>
    );
}

export default StakeLayout;