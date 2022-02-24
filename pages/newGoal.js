import React from 'react'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import NewGoalForm from '../Components/NewGoalForm';

const makeEntry = () => {
    const { data: session,status } = useSession()
   // const [content, setContent] = useState()

    // useEffect(() =>
    // {
    //     const fetchData = async () =>
    //     {
    //         const res = await fetch('/api/editProfile')
    //         const json = await res.json()

    //         if (json.content) {
    //         setContent(json.content)
    //     }
    //     }
    //     fetchData()
    // },[session])

    if (typeof window !== 'undefined' && status ==='loading') return null;

    if (status === "unauthenticated") return (
        <main>
            <div>
                <h1>You need to be signed in to write and start your new goal journey</h1>
            </div>
        </main>
    )

    return (
        <div><head>  
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        </head>
        <main><div className="container mx-auto relative h-100 w-82">
        <div className="m-100 p-10 mt-20 px-70 border-1  bg-white  flex flex-col shadow-2xl rounded-lg w-11/12 inset-5">
            
                <NewGoalForm/>
                </div>
                
            </div></main>
            </div>)
}

export default makeEntry