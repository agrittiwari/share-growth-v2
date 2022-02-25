import React from 'react'

const NewGoalForm =() => {
    return (
        <div className="ml-40  my-12 px-15 bg-white justify-items-center flex bg-blue-200  flex-col shadow-2xl w-8/12 rounded-lg">
            <strong className=" my-2 mb-0 p-4 text-4xl ">New Goal </strong>
            <br/>
            <h1 className="text-3xl	mb-2 p-4 mt-0 underline ">What do you want to track and share:</h1>
            <form className="form flex p-4 flex-col">
                <label htmlFor="track growth" className='mb-0 text-xl'>Give a label for your New Goal:</label>
                <br/>
                <input  className="border border-gray-400 p-2 mb-4  rounded-lg appearance-none focus:border-gray-500 focus:outline-none"placeholder="What do you want to track" name="goal-description" type="text" />
                <label className="mb-4  text-xl"htmlFor="today's Entry"  > Write your entry</label>

                <input type="text" placeholder="Your entry" className="border border-gray-400 rounded-lg p-2 mb-8 appearance-none focus:border-gray-500 focus:outline-none" />
                <button className="rounded-full bg-blue-600  p-1 m-4 border border-gray-600">Create and start sharing</button>
            </form>
        </div>
    )
}

export default NewGoalForm
