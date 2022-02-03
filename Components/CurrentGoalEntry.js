import React, {useState, useEffect} from 'react'

function CurrentGoalEntry() {
    const [goalsList, setGoalsList] = useState([
        {id: 'BUI', name: 'build a Habit of Reading books'},
        {id: 'GOA', name:'Goal' },
        {id: 'RUN', name: 'Run10 KM'}
        
        ])
   
    const selectGoal = goalsList.length > 0 && goalsList.map((goal, i) =>
    {
        return (
            <option key={i} value={goal.id}>{goal.name}</option>
        )
    })


    useEffect(() => {
      //setGoalsList  here.  initial State will be []
    }, [])
    
    return (
        <div className="mx-10  px-10 border-2  bg-white justify-items-center flex flex-col shadow-2xl rounded-lg w-4/12">
            <strong>Continue tracking yourself</strong>
            <form className="form my-3 flex flex-col">
                <select className="form-select px-4 py-3 rounded-full">
                    {selectGoal}
                </select>
                <label htmlFor="track growth">Track your journey and share</label>
                <input  className="form-input border border-gray-700 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" placeholder="Entry for the day" type="text" name="Write Entry" id="" />
                <button>Save</button>
            </form>
        </div>
    )
}

export default CurrentGoalEntry
