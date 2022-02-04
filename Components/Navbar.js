import React from 'react'
import {
  useSession, signIn, signOut
} from 'next-auth/react'


function Navbar({ user })
{
  const [session, loading] = useSession()
    return (
        
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand " href="#"><span className="text-pink-700">Share-Growth</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
       {!session && <li className="nav-item"> <button onClick={() => signIn()}>Sign in</button>
        
        </li> }
        
        {session && (     
                    <li className="nav-item">
                      Not signed in <br /> <button onClick={() => signOut()}>Sign out</button>
                    </li>        
        )}     

      </ul>
    </div>
  </div>
</nav>
         
             
    )
}

export default Navbar