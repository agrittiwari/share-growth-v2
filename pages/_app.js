import { Provider } from "next-auth/client"
import { SaveUserProvider } from '../Contexts/userContext/userContext';

const MyApp=({ Component, pageProps }) =>
{
    const { user } = pageProps;
    return (
      <Provider session={pageProps.session}>
        <SaveUserProvider>
           <div className=" w-screen">
              <Component {...pageProps} />
           </div>
        </SaveUserProvider>
          
      </Provider>
      
    )  
  }
  
  export default MyApp
  