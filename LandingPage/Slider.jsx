import { useEffect, useState } from 'react';

const Slider = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    const nfts = document.querySelectorAll('.nfts');
    let totalWidth = 0;

    nfts.forEach((nft) => {
      totalWidth += nft.offsetWidth;
    });

    setInnerWidth(totalWidth);
  }, []);

  return (
    <>
      <section className="bg-black dark:bg-gray-900">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
        <div className="container md:px-48 px-10 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-300 capitalize lg:text-3xl dark:text-white">
            Gallery
          </h1>
        </div>
          <div className="image-container relative w-full">
            <div className="image-sprite h-48">
            </div>
          </div>
          <div className="image-container1 relative top-6 w-full">
            <div className="image-sprite1 h-52">
            </div>
          </div>
      </section>
    </>
  );
};

export default Slider;
