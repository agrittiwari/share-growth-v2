import React, {useState, useEffect} from 'react'

export const MakeEntryForm=()=> {
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
        <div className="ml-40  my-12 px-15 bg-white justify-items-center flex bg-blue-200  flex-col shadow-2xl w-8/12 rounded-lg">
            <strong className=" my-2 mb-0 p-4 text-4xl ">Continue tracking yourself</strong>
            <form className="form flex p-4 flex-col">
                <select className="form-select px-4 py-3 mb-4 rounded-full">
                    {selectGoal}
                </select>
                <label className="mb-4 focus:border-gray-500 focus:outline-none text-xl" htmlFor="track growth">Track your journey and share</label>
                <input className="border border-gray-400 p-2 mb-4  rounded-lg appearance-none focus:border-gray-500 focus:outline-none"placeholder="Entry for the day" type="text" name="Write Entry" id="" />
               
                <button className="rounded-full bg-blue-600  p-1 m-4 border border-gray-600">Save</button>
            </form>
        </div>
    )
}


