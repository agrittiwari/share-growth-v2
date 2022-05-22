import
  {
    useSession
  } from "next-auth/react"

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from "react"

// import { SaveUserContext } from '../Contexts/userContext/userContext'
import { Loader } from "../../Components/Loader"

import clientPromise from '../../lib/mongodb'

import { DashboardComponent } from "../../Components/Dashboard"



const Dashboard = ({ isConnected }) =>
{
  const { data: session, status } = useSession()
  const router= useRouter()
  useEffect(()=>{
    if (status === 'unauthenticated' || !session){
       router.push('/')
      }
  },[session])
   
    return (
      <div className="overflow-hidden">
        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
   
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>
        </Head>
        
          <main>
            
    {(status ==='loading') && <Loader/>}
    
            {(status === "authenticated") &&
               <><DashboardComponent />
                {console.log(`this is from dashboard page ${session.user.id}`)}
               </>
             
            }
          </main>
        
      </div>
  
    )
  }
export default Dashboard;

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: {
        isConnected: true,
        },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
