import { SessionProvider } from "next-auth/react"
import '../styles.css'
//import { SaveUserProvider } from '../Contexts/userContext/userContext';

const MyApp=({
  Component,
  pageProps: { session, ...pageProps },
}) =>
{
    return (
      <SessionProvider session={session}>
           <div className=" w-screen">
              <Component {...pageProps} />
           </div>          
      </SessionProvider>
      
    )  
  }
  
  export default MyApp
  