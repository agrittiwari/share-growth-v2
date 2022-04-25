import useSWR from "swr";
import { fetcher } from '../fetch'


//to fetch user data after login on dashboard 
export function useUserDetails({userId})
{
    console.log(`logging from hook ${userId}`)
    const {data, error}= useSWR(`/api/user/${userId}`, fetcher)

    
  return {
     data,
    isLoading: !error && !data,
    error
  }

}


