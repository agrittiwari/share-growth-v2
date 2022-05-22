import React from 'react'
import Tweets from './Tweets'

const TwitterCard = () => {
  return (
    <div>
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
            </div>
        </div>  
    </div>
  )
}

export default TwitterCard