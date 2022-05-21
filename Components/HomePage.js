import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import shareGrowth from '../image/shareGrowth.png'

function HomePage()
{
    return (
        <div className="full-screen  bg-yellow-500">
            <Navbar />
            <div className='max-w-4xl  container-fluid'>   
                <div className="full-screen  bg-yellow-500 p-16 bg-fixed flex  ">
                    <div >
                        <h2 className="text-indigo-800 ">FAILURE IS GROWTH</h2>
                        <h2 className="text-pink-800 ml-10">SUCCESS IS GROWTH</h2>
                        <h2 className="text-orange-600 ml-16">PARTICIPATION IS GROWTH</h2>
                        <h2 className="text-blue-700 ml-24">ACTION IS GROWTH</h2>
                        
                    </div>
                    <div className="p-12 pt-0 ml-20 ">
                        <Image
                            src={shareGrowth}
                            alt="Picture of the author"
                            width={400}
                            height={400}
                        />
                    </div> 
                </div>
                <h2 className="text-white ml-24 text-4xl mb-2">DOCUMENT YOUR GROWTH</h2>
                <h2 className="text-violet-500 text-4xl justify-center">WRITING IS GROWTH</h2>
                <p className="text-lg italic text-white bg-black max-w-xs transition transform duration-100 translate-x-6 ">share-growth.online</p>
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
            
<div class="bg-gray-50 dark:bg-black p-10 flex items-center justify-center">
  <div class="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 p-4 rounded-xl border max-w-xl">
    <div class="flex justify-between">
      <div class="flex items-center">
        <img class="h-11 w-11 rounded-full" src="https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"/>
        <div class="ml-1.5 text-sm leading-tight">
          <span class="text-black dark:text-white font-bold block ">Visualize Value</span>
          <span class="text-gray-500 dark:text-gray-400 font-normal block">@visualizevalue</span>
        </div>
      </div>
     
    </div>
    <p class="text-black dark:text-white block text-xl leading-snug mt-3">“No one ever made a decision because of a number. They need a story.” — Daniel Kahneman</p>
    <img class="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700" src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"/>
    <p class="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">10:05 AM · Dec 19, 2020</p>
    <div class="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
    <div class="text-gray-500 dark:text-gray-400 flex mt-3">
      <div class="flex items-center mr-6">
       <span class="ml-3">615</span>
      </div>
      <div class="flex items-center mr-6">
        <span class="ml-3">93 people are Tweeting about this</span>
      </div>
    </div>
  </div>
</div>         </div>
    )
}

export default HomePage
