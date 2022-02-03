import React from 'react'

const NewGoalForm =() => {
    return (
        <div className="mx-10 px-10 bg-white justify-items-center flex flex-col shadow-2xl w-4/12 rounded-lg">
            <strong className="mx-4">New Goal </strong>
            <br/>
            <h1 >What do you want to track and share:</h1>
            <form className="form my-6  flex flex-col">
                <label htmlFor="track growth">Give a label for your New Goal:</label>
                <br/>
                <input  className="border border-gray-700 rounded-lg appearance-none focus:border-gray-500 focus:outline-none"placeholder="What do you want to track" name="goal-description" type="text" />
                <label htmlFor="today's Entry"> Write your entry</label>

           
                <input type="text" placeholder="Your entry"  className="border border-gray-700 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" />
            </form>
        </div>
    )
}

export default NewGoalForm
