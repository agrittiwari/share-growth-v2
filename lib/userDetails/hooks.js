import useSWR from "swr";
import { fetcher } from '../fetch'


//to fetch user data after login on dashboard 
export function useUserDetails(id)
{
    return useSWR(`/api/userDetails/${id}`, fetcher)
}


