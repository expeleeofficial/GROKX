import SwapLayout from "../components/swap/layout";

function Swap({ allTokens, setSelectedToken, selectedToken }) {
  return (
    <div>
      <div
        className="centered"
        style={{
          minHeight: "85vh",
        }}
      >
        <SwapLayout
          allTokens={allTokens}
          setSelectedToken={setSelectedToken}
          selectedToken={selectedToken}
        />
      </div>
    </div>
  );
}

export default Swap;
