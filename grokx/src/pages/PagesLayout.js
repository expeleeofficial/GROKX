import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Swap from "./Swap";
import Stake from "./Stake";
import Navigation from "../shared/nav";
import { useEffect, useState } from "react";
import { tokensMap } from "../utils/constants";

function PagesLayout() {
  const [selectedToken, setSelectedToken] = useState(
    tokensMap.testnet.tokens[0]
  );
  const [allTokens, setAllTokens] = useState(tokensMap.testnet.tokens);

  useEffect(() => {
    setAllTokens(tokensMap.testnet.tokens);
  }, [setAllTokens]);
  return (
    <div>
      <Router>
        <div className="container">
          <Navigation />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/swap"
                element={
                  <Swap
                    allTokens={allTokens}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                  />
                }
              />
              <Route exact path="/stake" element={<Stake />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default PagesLayout;
