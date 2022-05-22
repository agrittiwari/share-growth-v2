import
  {
    useSession
  } from "next-auth/react"
  import { useRouter } from 'next/router'

import Head from 'next/head'
import { Loader } from "../Components/Loader"

import clientPromise from '../lib/mongodb'

import HomePage from '../Components/HomePage'



const Home = ({ isConnected }) =>
{
  const { data: session, status } = useSession()
  const router= useRouter()
if (status ==='loading') return <Loader/>
if  (status ==='authenticated' ) { router.push('/dashboard')}
 
    return (
      <div className="overflow-hidden">
        <Head>
          <title>Share Growth</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css" integrity="sha384-zIaWifL2YFF1qaDiAo0JFgsmasocJ/rqu7LKYH8CoBEXqGbb9eO+Xi3s6fQhgFWM" crossOrigin="anonymous"></link>
        </Head>
         
          <main>
            {(status==='unauthenticated')&&<HomePage />}
          
        </main>
      </div>)
  
 
  }
export default Home;

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
