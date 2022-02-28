import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { EditDetails } from "../Components/Details";

  
// Print new id to the console

export default function EditProfile()
{
    const { data: session, status } = useSession()
   //console.log(session.user.id); 
   
    // { console.log(`this is from edit page ${ { ...session }}`)}
{console.log(session)}
    if (typeof window !== 'undefined' && status ==='loading') return null;

    if (status === "unauthenticated") return (
        <main>
            <div>
                <h1>You need to be signed in to update your profile details</h1>
            </div>
        </main>
    )

    return (
        
            <main>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
                <div className="container mx-auto relative h-100 w-82">
                <EditDetails userId={session?.user.id}/>
                </div>
            </main>         
        
    )
}

// export async function getServerSideProps(context) {
//     const client = await clientPromise;
  
//     const db = client.db();
  
//     let users = await db.collection("users").findById(user.id);
//     users = JSON.parse(JSON.stringify(users));
  
//     return {
//       props: { users },
//     };
//   }