function Home() {
    return (
        <div>
            <div
                className="centered"
                style={{
                minHeight: "40vh"
            }}>
                <div
                    className="card col-12"
                    style={{
                    height: "20vh"
                }}>
                    <div className="card-body">
                        Connect your wallet to provide liquidity and start earning GROKX tokens
                    </div>
                </div>

            </div>
            <h1>GROKX Staking</h1>
            <p className="col-2">Stake BNB/GROKX LP Tokens and earn rewards in GROKX</p>
            <div>
                <w3m-button/>
            </div>
        </div>
    );
}

export default Home;