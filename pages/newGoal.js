import React from 'react'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import clientPromise from '../lib/mongodb'

import NewGoalForm from '../Components/NewGoalForm';

const makeEntry = ({ isConnected }) =>
{
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
        <main><div className="container-fluid mx-auto relative h-100 w-82">
        <div>  {isConnected ? (
              <div className="justify-self-center m-5 ml-49">
                <h2>Your Habits
                </h2>
              </div>
            ) : (
              <h2 className="subtitle justify-self-center">
                Your habits aren't loading <code>README.md</code>{' '}
                for instructions.
              </h2>
            )}</div>
                <NewGoalForm userId={session?.user.id} />
                {console.log(session?.user.id)}
                {/* {console.log(ObjectId)} */}
                </div>   
            </main>
            </div>)
}

export default makeEntry


export async function getServerSideProps(context) {
    try {
      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
      await clientPromise
      return {
        props: {
          isConnected: true,
          },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
