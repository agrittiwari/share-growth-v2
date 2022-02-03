import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import shareGrowth from '../image/shareGrowth.png'

function HomePage()
{
    return (
        <div>
            <Navbar />
            <div className="full-screen  bg-yellow-500 p-20 bg-fixed flex ">
                <div className="w-1/2">
                <h2 className="text-indigo-800 ">FAILURE IS GROWTH</h2>
                <h2 className="text-pink-800 ml-10">SUCCESS IS GROWTH</h2>
                <h2 className="text-orange-600 ml-16">PARTICIPATION IS GROWTH</h2>
                <h2 className="text-blue-700 ml-24">ACTION IS GROWTH</h2>
                <h2 className="text-white ml-26 text-4xl mb-8">DOCUMENT YOUR GROWTH</h2>
                        
                <div className="bg-blue-300 ">
               <p className="text-lg text-white ">share-growth</p>

                </div>
                </div>
           

<div className="p-12 pt-0 ml-20"> <Image
        src={shareGrowth}
        alt="Picture of the author"
        width={400}
        height={400}
      /></div>
            </div>
            {/* Document your journey Quote section */}
            <div>
                {/* Garyvee and 3 others.... */}
            </div>
            {/* container to show use cases --- apple way cards, rounded at edge with z-index and shadow a bit */}
            <div className=" bg-pink-500 grid-8"> 
                <div className="card ">

                </div>
            </div>
            Share-Growth, a platform to share your growth.
           
        </div>
    )
}

export default HomePage
