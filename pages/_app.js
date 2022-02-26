import { SessionProvider } from "next-auth/react"
//import { SaveUserProvider } from '../Contexts/userContext/userContext';

const MyApp=({
  Component,
  pageProps: { session, ...pageProps },
}) =>
{
    const { user } = pageProps;
    return (
      <SessionProvider session={session}>
           <div className=" w-screen">
              <Component {...pageProps} />
           </div>          
      </SessionProvider>
      
    )  
  }
  
  export default MyApp
  