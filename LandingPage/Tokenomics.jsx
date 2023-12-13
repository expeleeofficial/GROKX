import React from 'react'

const Tokenomics = () => {
  return (
 <>
 <section class="bg-black dark:bg-gray-900">
 <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">

</div>
    <div class="container md:px-48 px-10 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-300 capitalize lg:text-3xl dark:text-white">Tokenomics</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-3xl dark:bg-gray-800">
               

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">total supply</h1>

                <p class="text-gray-500 dark:text-gray-300">
                1.000.000.000
                </p>

               
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-3xl dark:bg-gray-800">
            

                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Tax</h1>

                <p class="text-gray-500 dark:text-gray-300">
             

                3/3 Tax, This is community token
                </p>

             
            </div>

            <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-3xl dark:bg-gray-800">
              
                <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">token</h1>

                <p class="text-gray-500 dark:text-gray-300">
                LP BURNED ​OWNERSHIP RENOUNCED
                </p>

            
            </div>
        </div>
    </div>
</section>
 </>
  )
}

export default Tokenomics
