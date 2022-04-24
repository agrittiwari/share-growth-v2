import React from 'react'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {BackToDashboard} from '../../Components/Buttons';
import { MakeEntryForm } from '../../Components/Forms';

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
                <h1>You need to be signed in to make your entry</h1>
            </div>
        </main>
    )

    return (
        <div><head>  
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        </head>
        <main><div className="container mx-auto relative h-100 w-82">
             <BackToDashboard />
                <MakeEntryForm/>
                
            </div></main>
            </div>)
}

export default makeEntry