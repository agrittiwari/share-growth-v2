import { fetcher } from '../../lib/fetch';
import {useUserDetails} from '../../lib/userDetails'
import Link from 'next/link'
import Image from 'next/image'
import default_user from '../../image/default_user.jpg'
import {
  useSession
} from 'next-auth/react'
import { useRouter } from 'next/router'



export const UserDetails =() =>{
  const { data: session, status } = useSession()
  const router= useRouter()
 // console.log(session.user)
  if(status=='authenticated'){
    console.log(`logging from 'userDetails Component ${session?.user.id}` )
    const { data, isLoading, error }  = useUserDetails({ userId: session?.user.id})
    if (isLoading) return ( 
      <div className=" flex flex-row space-between p-4 bg-blue-300	 justify-between container-fluid">
      <div className="flex flex-row  m-2 ">
      <Image
        className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8"
          src={default_user}
          alt="User-Image"
          width={250}
          height={250}
        />
    <div className="ml-20 mr-20">
      <h1>👋 I believe in sharing GROWTH</h1>
      <p><Link href="#">Twitter Handle</Link></p>
      <p>Bio 🏀🎓   </p>
    <button>
    <Link  href="/dashboard/editProfile">Edit Profile</Link></button>  
    </div>
    
    </div>
    </div>)
       
    if(error)  
    return(
        <div>
      <p>error: {error.message}</p>
        </div>    
      )
    
       if (data) {
         console.log(data.user)
      //return null;}
       return (   
        <div className=" flex flex-row space-between p-4 bg-blue-300	 justify-between container-fluid">
        <div className="flex flex-row  m-2 ">
        <Image
        className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8"
          src={data.user.image}
          alt="User-Image"
          width={250}
          height={250}
        />
      {/* <img src={data.user.image} className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8" /> */}
      <div className="ml-20 mr-20">
        <h1>👋 {data.user.name}</h1>
        <p>🏀🎓{data.user.about}</p>
        <p><Link href={`https://www.twitter.com/${data.user.twitterHandle}`}>{data.user.twitterHandle}</Link></p>
        <p><Link href= {data.user.bioLink} >Know more about me!</Link> </p>
      <button>
      
      <Link  href="/dashboard/editProfile">Edit Profile</Link></button>  
      </div>
      
      
      </div>
      </div>)}
  }
  
  if (status==='unauthenticated'){
    router.push('/')
  }

}