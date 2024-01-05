// import React, { useEffect, useState } from 'react';

// const Gallery = () => {
//   const [innerWidth, setInnerWidth] = useState(0);

//   useEffect(() => {
//     const nfts = document.querySelectorAll('.nfts');
//     let totalWidth = 0;
    
//     nfts.forEach((nft) => {
//       totalWidth += nft.offsetWidth;
//     });

//     setInnerWidth(totalWidth);
//   }, []);

//   return (
//     <div className="w-full">
//       <div className="image-container relative w-full overflow-hidden">
//         <div className="image-sprite h-48" style={{ backgroundImage: "url('../images/slider1.png')", backgroundSize: '1387px 243px', animation: 'slide 50s linear infinite' }}></div>
//       </div>
//       <div className="image-container1 relative top-6 w-full overflow-hidden">
//         <div className="image-sprite1 h-52" style={{ backgroundImage: "url('../images/slider2.png')", backgroundSize: '1390px 266px', animation: 'slide1 50s linear infinite' }}></div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
