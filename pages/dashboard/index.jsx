import
  {
    useSession
  } from "next-auth/react"

import Head from 'next/head'
import { useRouter } from 'next/router'
// import { SaveUserContext } from '../Contexts/userContext/userContext'

import clientPromise from '../../lib/mongodb'

import { DashboardComponent } from "../../Components/Dashboard"



const Dashboard = ({ isConnected }) =>
{
  const { data: session, status } = useSession()
  
  const router= useRouter()
  if(status === 'unauthenticated'){
    router.push('/')}
  
    return (
      <div className="overflow-hidden">
        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
   
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
        </Head>
        { (status === "authenticated") &&
          <main>
            {/* <p>Signed in as {session.user.email}</p> */}
        
            
              <DashboardComponent />
              {console.log(`this is from dashboard page ${session.user.id}`)}
            
            {/* <h2>{currentUser}</h2> */}
            {/* {isConnected ? (
              <div className="justify-self-center m-5 ml-49">
                <h2>Your Habits
                </h2>
              </div>
            ) : (
              <h2 className="subtitle justify-self-center">
                Your habits aren't loading <code>README.md</code>{' '}
                for instructions.
              </h2>
            )} */}
          </main>}
        
      </div>)
  
 
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
