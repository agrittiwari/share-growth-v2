import Link from 'next/link'
import React from 'react'

export const LinkDiv1 = () => {
    return (
        <Link href="/entry" passHref>
            <div className="ml-10  p-20 text-white border-2  bg-blue-700  flex flex-col shadow-2xl rounded-lg "><h6>Continue sharing your journey 🕕</h6>
            <strong>Click here 🤚 </strong></div>

            </Link>
  )
}

export const LinkDiv2 = () =>
{
    return (
        <Link href="/newGoal" passHref>
            <div className="ml-10  p-20 border-2  bg-blue-700 text-white flex flex-col shadow-2xl rounded-lg "><h6>Start sharing your new adventure online</h6><strong>Click here 🤚 </strong></div>
  </Link>  )
}