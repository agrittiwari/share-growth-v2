import useSWR from "swr";
import { fetcher } from '../fetch'


//to fetch user data after login on dashboard 
export function useUserDetails({id})
{
    console.log(`logging from hook ${id}`)
    const {data, error}= useSWR(`/api/user/${id}`, fetcher)

    
  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }

}


