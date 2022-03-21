export const UserDetails =() =>{
    
    return( 
    
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
  
  
</div>)
}