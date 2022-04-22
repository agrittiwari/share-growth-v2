import { fetcher } from '@/lib/fetch';
import {useUserDetails} from '../../lib/userDetails'
import Image from 'next/image'
import default_user from '../../image/default_user.jpg'


export const UserDetails =() =>{
    
const {data, error, isValidating} = useUserDetails(session.user.id)
if (isValidating) return ( 
    
  <div className="flex flex-row  m-2 ">
  <Image
    className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8"
      src={default_user}
      alt="User-Image"
      width={500}
      height={500}
    />
<div className="ml-20 mr-20">
  <h1>👋 I believe in sharing GROWTH</h1>
  <p><Link href="#">Twitter Handle</Link></p>
  <p>Bio 🏀🎓   </p>
<button>
<Link  href="/editProfile">Edit Profile</Link></button>  
</div>


</div>)
   
if(error)
return(
    <div>
  <p>error:{error}</p>
    </div>    
  )

  
   if (data)
   return (   
    <div className="flex flex-row  m-2 ">
    <Image
    className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8"
      src={data.user.image}
      alt="User-Image"
      width={500}
      height={500}
    />
  <img src={data.user.image} className=" rounded-full h-40 w-40  border-2 border-yellow-800 p-1 mr-8" />
  <div className="ml-20 mr-20">
    <h1>👋 {data.user.name}</h1>
    <p><Link href={`https://www.twitter.com/${data.user.twitterHandle}`}>{data.user.twitterHandle}</Link></p>
    <p>🏀🎓 {data.user.bioLink}  </p>
  <button>
  <Link  href="/editProfile">Edit Profile</Link></button>  
  </div>
  
  
  </div>)

}