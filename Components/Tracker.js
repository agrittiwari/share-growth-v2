import React, { useEffect, useState } from 'react'

function Tracker({user})
{  const [entries, setEntries] = useState([])

useEffect(() => {
    setEntries(user.goals[0].entries)
}, [])
    return (
        <div className="container">
            <div>
                <strong>Date</strong>&nbsp; <p>time</p>
                <text>{entries}</text>
            </div>
            
       </div>
    )
}

export default Tracker
