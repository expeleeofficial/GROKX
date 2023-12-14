const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function Content() {
    return (

      <div className="relative bg-black py-16 sm:py-24">
   
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-black lg:right-72" />
              
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://prodex.app/static/media/for_trader-c52eb30e.85dfcae81a1035d97e08.png"
                  alt=""
                />
                <div className="absolute inset-0  mix-blend-multiply" />
                <div className="absolute inset-0 opacity-90" />
                <div className="relative px-8">
                 
                
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 ">
             
              <div className="mt-6 space-y-6 text-gray-200">
                <p className="text-lg">
                FOR TRADERS
                </p>
                <p className="text-base leading-7">
                Your gateway to the ultimate trading experience
                </p>
                <p className="text-base leading-7">
                At ProDex, Users can trade tokens across different chains and swaps all in one place
                 and can enjoy advanced trading tools like limit orders, charts, cross-chain swaps, and earn through staking, farming, and even NFT staking
                </p>

                <p className="text-base leading-7">
               <ul>
               <li>Advance Trading Tools</li>
               <li>Multiple Chains and Swaps</li>
               <li>NFT and token Staking, Farming</li>
               <li>
               <div className="mt-10  gap-x-6">
               <a
                 href="#"
                 className="rounded-md bg-yellow-200 px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
             Swap Now
               </a>
             
             </div>
               </li>
               </ul>
                </p>

                <p className="text-lg">
                FOR Projects
                </p>
                <p className="text-base leading-7">
                A platform for project success
                </p>
                <p className="text-base leading-7">
                where liquidity addition, token trading & staking, NFT staking, and user exposure converge effortlessly
                </p>

                <p className="text-base leading-7">
               <ul>
               <li>Add liquidity</li>
               <li>Listing of token</li>
               <li>Offer Staking for Token/NFTs</li>
               <li>
               <div className="mt-10 flex   gap-x-6">
               <a
                 href="#"
                 className="rounded-md bg-yellow-200 px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
       Add Liquidity
               </a>

               <a
                 href="#"
                 className="rounded-md bg-yellow-200 px-3.5 py-1.5 text-base font-semibold leading-7 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
Contact US
               </a>
             
             </div>
               </li>
               </ul>
                </p>
              </div>
            </div>
  
            {/* Stats section */}
           
          </div>

          
        </div>
      </div>
    )
  }
  