import React from 'react'

const people = [
   
  
    {
      imageUrl: '/Logo 1.png',
    },

    
    {
        imageUrl:'/Logo 2.png',
    },

    {
        imageUrl:'/Logo 3.png',
    },

    {
        imageUrl:'/Logo 4.png',
    },

    {
        imageUrl:'/Logo 5.png',
    },

    {
        imageUrl:'/Logo 6.png'
    }
  ]



const Partners = () => {
  return (
   <>
   <div className="bg-black">
   <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
     <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
       <div className="space-y-5 sm:space-y-4">
         <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl">Meet our Partners</h2>
        
       </div>
       <div className="lg:col-span-2">
       <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person, index) => (
                <li key={index}>
                  <div className="flex items-center justify-center space-x-4 lg:space-x-6">
                    <img className="h-28 w-56 rounded-xl bg-white lg:h-28 lg:w-56" src={person.imageUrl} alt={`Partner ${index}`} />
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
