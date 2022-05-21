import Link from 'next/link'
import React from 'react'

export const LinkDiv1 = () => {
    return (
        <Link href="/dashboard/entry" passHref>
            <div className="ml-10  p-20 text-white border-2  bg-blue-700  flex max-w-xs flex-col shadow-2xl rounded-lg "><h6>Continue sharing your journey 🕕</h6>
            <strong>Click here 🤚 </strong></div>

            </Link>
  )
}

export const LinkDiv2 = () =>
{
    return (
        <Link href="/dashboard/newGoal" passHref>
            <div className="ml-10  p-20 border-2  bg-blue-700 text-white flex flex-col max-w-xs shadow-2xl rounded-lg "><h6>Start sharing your new adventure online</h6><strong>Click here 🤚 </strong></div>
  </Link>  )
}