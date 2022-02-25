import { SessionProvider } from "next-auth/react"
//import { SaveUserProvider } from '../Contexts/userContext/userContext';

const MyApp=({ Component, pageProps }) =>
{
    const { user } = pageProps;
    return (
      <SessionProvider session={pageProps.session}>
      
           <div className=" w-screen">
              <Component {...pageProps} />
           </div>
       
          
      </SessionProvider>
      
    )  
  }
  
  export default MyApp
  