import React from 'react'

const About = () => {
  return (
    
    <>
    <section class="flex items-center isolate  xl:h-screen font-poppins dark:bg-gray-800 ">
    
    <div class="justify-center isolate flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg
      className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
      viewBox="0 0 1155 678"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
        fillOpacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9089FC" />
          <stop offset={1} stopColor="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  </div>   
    <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div class="relative lg:max-w-md">
                    <img src="https://static.wixstatic.com/media/82da36_6ec84301829f4d26bd180adadda33430~mv2.webp" alt="aboutimage"
                        class="relative z-10 object-cover w-full rounded h-96" />
                    <div
                        class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                        <p class="text-lg font-semibold md:w-72">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                viewBox="0 0 16 16">
                                <path
                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                </path>
                            </svg> GROK x
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full isolate px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                    <span class="text-sm text-gray-200 uppercase dark:text-gray-400">Who we are?</span>
                    <h1 class="mt-2 text-3xl font-black text-gray-300 md:text-5xl dark:text-gray-300">
                        About Us
                    </h1>
                </div>
                <p class="mb-6 text-base leading-7 text-gray-300 dark:text-gray-400">
                Grok x is not just a meme coin; it's a playful revolution in the cryptocurrency world. Developed in collaboration with artist Matt Furie, creator of Pepe the Frog, grok x brings joy and positivity to the blockchain.  </p>
                <p class="mb-6 text-base leading-7 text-gray-300 dark:text-gray-400"> Built on the bsc standard, grok x encourages community engagement, embraces humor, and incorporates charitable initiatives. Join the Hoppy movement and experience a fresh, fun approach to decentralized finance with a touch of meme magic!</p>
              
                <a href="#"
                    class="px-4 py-2 text-gray-300 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                    Learn more
                </a>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default About
