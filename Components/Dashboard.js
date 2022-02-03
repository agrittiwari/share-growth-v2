import React, {useEffect, useState, useContext} from 'react'
import { SaveUserContext } from '../Contexts/userContext/userContext'
import Navbar from './Navbar'
import NewGoalForm from './NewGoalForm'
import CurrentGoalEntry from './CurrentGoalEntry'
import {
    useSession, signIn, signOut
  } from 'next-auth/client'
  

function Dashboard()
{
 const {saveUser, currentUser, setCurrentUser, getUser} = useContext(SaveUserContext)
 
 const [session, loading] = useSession()
    
   useEffect(() => {
    console.log('printing...')
     getUser(session)
     console.log('printing...')
}, [])
 
 

    return (
        <div>
             <Navbar />
            <div className=" flex flex-row space-between border-4 border-black justify-between w-11/12">
               
                <div className="flex flex-row border-2 m-2 border-black w-1/2">
                    <h3>{loading &&
                    console.log(session.user.userId)
                    }</h3>
                   {session && <img src={session.user.name} className=" rounded-full h-20 w-20" />}
                   {session && <h1>hello {session.user.email}</h1>}
               </div>
     
            </div>
            
            <div className="flex flex-row justify-items-center bg-gray-100 p-10 w-11/12 ">
          <CurrentGoalEntry />
          <NewGoalForm />
        </div>
       
           
        </div>
    )
}

export default Dashboard
