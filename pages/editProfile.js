import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function EditProfile()
{
    const { data: session,status } = useSession()
    const [content, setContent] = useState()

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            const res = await fetch('/api/editProfile')
            const json = await res.json()

            if (json.content) {
            setContent(json.content)
        }
        }
        fetchData()
    },[session])

    if (typeof window !== 'undefined' && status ==='loading') return null;

    if (status === "unauthenticated") return (
        <main>
            <div>
                <h1>You need to be signed in to update your profile details</h1>
            </div>
        </main>
    )

    return (
        <div><head>  
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        </head>
        <main><div className="container mx-auto relative h-100 w-82">
              <div className="m-100 p-10 mt-20 px-70 border-1  bg-white  flex flex-col shadow-2xl rounded-lg w-11/12 inset-5">
            <strong className="underline">Edit your Profile here!</strong>
     <form className="form my-3 flex flex-col">
          <label className="p-2 decoration-solid	" >About</label>
          <input  className="form-input border border-gray-400 p-6 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" type="text" placeholder="Write about yourself and what are you going to share"/>
            <label className="p-2 decoration-solid	">Twitter Username <i className="fa fa-twitter" aria-hidden="true"></i></label>
                <input type="text"  className="form-input border border-gray-400 p-2 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" placeholder="twitter username"/>
                <label className="p-2 decoration-solid	">Link you want to share</label> <input className="form-input border border-gray-400 p-2 rounded-lg appearance-none focus:border-gray-500 focus:outline-none mb-4"  type="text" placeholder="your go-to biolink" />
                <button className="rounded-full bg-sky-500  p-1 border border-gray-600">Update</button>
        </form></div>
            </div></main>
            </div>
    )
}