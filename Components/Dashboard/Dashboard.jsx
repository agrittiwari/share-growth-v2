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
       <div className=" bg-blue-200  ">
          <div className="flex flex-row justify-center max-w-4xl container-fluid p-5 w-10/12">
          <LinkDiv1/>
          <LinkDiv2/>
          </div>
          
        </div>
        <div className="flex flex-row justify-items-center bg-blue-300 container-fluid max-w-4xl p-5 w-2/5 ">
        <SharedItem/>
        </div>

    
 </div> 
       
           
        
    )
}
