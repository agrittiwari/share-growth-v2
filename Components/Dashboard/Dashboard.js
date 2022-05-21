import React, {useEffect, useState, useContext} from 'react'
import { SaveUserContext } from '../../Contexts/userContext/userContext'
import Navbar from '../Navbar'
import NewGoalForm from '../Forms'
import MakeEntryForm from '../Forms'

import SharedItem from '../SharedItem'
import { LinkDiv1, LinkDiv2 } from '../LinkDiv'
import { UserDetails } from './UserDetails'
  


export function DashboardComponent()
{
    return (
                 
      <div>
      <Navbar />
     <UserDetails/>
     
     {/* <div className=" flex flex-row space-between p-4 bg-blue-300	 justify-between container-fluid">
        
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

     </div> */}
     
        <div className=" bg-blue-200  ">
          <div className="flex flex-row justify-center max-w-4xl container-fluid p-5 w-10/12">
          <LinkDiv1/>
          <LinkDiv2/>
          </div>
          
          
          {/* <CurrentGoalEntry />
   <NewGoalForm /> */}
        </div>
        <div className="flex flex-row justify-items-center bg-blue-300 container-fluid max-w-4xl p-5 w-2/5 ">
        <SharedItem/>
        </div>

    
 </div> 
       
           
        
    )
}
