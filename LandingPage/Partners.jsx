import React from 'react'

const people = [
   
  
    {
        imageUrl:'https://static.wixstatic.com/media/82da36_9ce82119691f48fb8fc5b4d0f7c88284~mv2.png',
    },

    
    {
        imageUrl:'https://static.wixstatic.com/media/82da36_54de57b5b50c4f52908886697ca60e0b~mv2.webp',
    },

    {
        imageUrl:'https://static.wixstatic.com/media/82da36_f56f58683fb1446c9bc51e14ac63d63b~mv2.png',
    },

    {
        imageUrl:'https://static.wixstatic.com/media/82da36_4dab1abc452342db8c83aacb5b892832~mv2.png',
    },

    {
        imageUrl:'https://static.wixstatic.com/media/82da36_c5552d41a13448ddb0c11d8faa1dc48a~mv2.png',
    },




  

 

    {
        imageUrl:'https://static.wixstatic.com/media/82da36_b70ad1fecfdf4cc3a5cfed9c471bf1ac~mv2.png/v1/fill/w_588,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/82da36_b70ad1fecfdf4cc3a5cfed9c471bf1ac~mv2.png'
    }
  ]



const Partners = () => {
  return (
   <>
   <div className="bg-black">
   <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
     <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
       <div className="space-y-5 sm:space-y-4">
         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our Partners</h2>
        
       </div>
       <div className="lg:col-span-2">
         <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
           {people.map((person) => (
             <li key={person}>
               <div className="flex items-center justify-center space-x-4 lg:space-x-6">
                 <img className="h-28 w-56 rounded-xl bg-white lg:h-28 lg:w-56" src={person.imageUrl} alt="" />
                
               </div>
             </li>
           ))}
         </ul>
       </div>
     </div>
   </div>
 </div>
   </>
  )
}

export default Partners
