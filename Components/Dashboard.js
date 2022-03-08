import React, {useEffect, useState, useContext} from 'react'
import { SaveUserContext } from '../Contexts/userContext/userContext'
import Navbar from './Navbar'
import NewGoalForm from './Forms/'
import MakeEntryForm from './Forms'
import {
    useSession, signIn, signOut
  } from 'next-auth/react'
import Link from 'next/link'
import SharedItem from './SharedItem'
import { LinkDiv1, LinkDiv2 } from './LinkDiv'
  

function Dashboard()
{
//  const {saveUser, currentUser, setCurrentUser, getUser} = useContext(SaveUserContext)
 
  const { data: session, status } = useSession()

    
//    useEffect(() => {
//     console.log('printing...')
//      getUser(session)
//      console.log('printing...')
// }, [])
 
 

    return (
                 
      <div>
      <Navbar />
     <div className=" flex flex-row space-between p-4 bg-blue-300	 justify-between container-fluid">
        
         <div className="flex flex-row  m-2 ">
             
              {console.log(session.user)}
             
            <img src={session.user.image} className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8" />
            <div className="ml-20 mr-20">
              <h1>👋 {session.user.name}</h1>
              <p><Link href="#">Twitter Handle</Link></p>
              <p>Bio 🏀🎓   </p>
            <button>
            <Link  href="/editProfile">Edit Profile</Link></button>  
           </div>
            
            
        </div>

     </div>
     
        <div className="flex flex-row justify-center bg-blue-200 container-fluid p-5 w-11/12 ">
          <LinkDiv1/>
          <LinkDiv2/>
          
          {/* <CurrentGoalEntry />
   <NewGoalForm /> */}
        </div>
        <div className="flex flex-row justify-items-center bg-blue-300 container-fluid p-5 w-2/5 ">
        <SharedItem/>
        </div>

    
 </div> 
       
           
        
    )
}

export default Dashboard
