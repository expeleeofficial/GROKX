import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

//   const handleDownload = () => {
//     // You can change the file URL as needed.
//     const fileUrl = '/BRO Bot  Whitepaper.pdf';
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.download = 'BRO Bot  Whitepaper.pdf';
//     link.click();
//   };


  return (
    <div>
      <nav className="w-full  bg-gray-900 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/" title="" class="flex"> 
            
              <span className='text-2xl mx-2 text-white  '>GROK X</span>
               </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <BsFillCaretDownFill />
                  ) : (
                    <GiHamburgerMenu className='bg-white' />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>

            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
            <ul class="flex flex-col gap-4 text-xxl p-4 md:p-0 mt-4 font-medium    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;