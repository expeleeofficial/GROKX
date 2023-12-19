import React from 'react'

const Staking = () => {
  return (
  <>
  <div className="bg-gray-900 flex flex-col justify-center items-center p-2">
  <div className="grid grid-rows-3 gap-4 w-[40%] h-full">
    <div className="flex flex-col bg-gray-200 w-full row-span-2 h-96 p-2 rounded-xl">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col">
          <span>Available to Stake</span>
          <span>0.0 ETH</span>
        </div>
        <div className="w-28 h-6 bg-black text-white p-1 rounded-md">
          0Xr4r...r4r4
        </div>
      </div>
      <hr className="w-[90%] flex mx-auto border-gray-800" />
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col">
          <span>Staked Amount</span>
          <span>0.0 stETH</span>
        </div>
        <div className="flex flex-col">
          <span>Lido APR</span>
          <span>3.9%</span>
        </div>
      </div>
      <div className="h-full w-full px-4 mx-auto bg-gray-800 rounded-lg p-2">
        <div className=" mx-auto rounded-lg py-1 px-2 border border-gray-400 flex justify-between items-center">
          <span className="text-white">Amount</span>
          <span className="w-fit h-6 p-1 bg-blue-200 flex items-center rounded-sm tex-sm">
            ETH
          </span>
        </div>
        {/* <div><input type="text" placeholder="Amount" className="px-2" /></div> */}
        <div className=" mx-auto my-2 h-7 rounded-lg flex justify-center items-center bg-gray-500">
          Submit
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>You will receive</span>
            <span>0 stETH</span>
          </div>
          <div className="flex justify-between items-center">
            <span>You will receive</span>
            <span>0 stETH</span>
          </div>
          <div className="flex justify-between items-center">
            <span>You will receive</span>
            <span>0 stETH</span>
          </div>
          <div className="flex justify-between items-center">
            <span>You will receive</span>
            <span>0 stETH</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-500 w-full row-span-1 p-4 rounded-xl ">
      <div className="flex justify-between items-center mb-1">
        <span>Lido Statistics</span>
        <span>View on etherscan</span>
      </div>
      <hr className="w-11/12 mx-auto mb-2" />
      <div className="flex justify-between items-center">
        <span>Staking Rewards</span>
        <span>0.0 stETH</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Staking Rewards</span>
        <span>0.0 stETH</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Staking Rewards</span>
        <span>0.0 stETH</span>
      </div>
      <div className="flex justify-between items-center">
        <span>Staking Rewards</span>
        <span>0.0 stETH</span>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default Staking
