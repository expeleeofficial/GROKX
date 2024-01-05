import React, { useState } from "react";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }


    return (
        <nav className="sticky z-50 transition duration-300">
            <div className="container text-base flex items-center justify-between lg:px-10 px-5 py-2 mx-auto">
                <a to="#" className="flex flex-row items-center justify-start p-2">
                    <img className="h-8" src="https://static.wixstatic.com/media/82da36_82a64ea44f354865a84a345409a5d5f5~mv2.png/v1/fill/w_531,h_128,al_c,lg_1,q_85,enc_auto/82da36_82a64ea44f354865a84a345409a5d5f5~mv2.png" alt="" />
                </a>
                <div className="hidden md:flex items-center space-x-6">
                    <div className="space-x-12 font-semibold">
                        <a href="https://t.me/grokxbnb">Telegram</a>
                        <a href="https://twitter.com/grokxbsc/">Twitter</a>
                        <a href="https://pancakeswap.finance/swap?outputCurrency=0xa7ffb399d44eb830f01751052C75d14f0b47E779">Buy $GROKX</a>
                        <a href="https://grok-new.vercel.app/">Dapp</a>
                    </div>

                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>


            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="py-2 pl-2 md:hidden">
                    <a href="https://t.me/grokxbnb" className="block px-4 py-2">Telegram</a>
                    <a href="https://twitter.com/grokxbsc/" className="block px-4 py-2">Twitter</a>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0xa7ffb399d44eb830f01751052C75d14f0b47E779" className="block px-4 py-2">Buy $GROKX</a>
                    <a href="https://grok-new.vercel.app/" className="block px-4 py-2">Dapp</a>


                </div>
            )}
        </nav>
    );
};

export default Navbar;
