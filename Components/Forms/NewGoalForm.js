import React ,{useState }from 'react'
import { ErrorAlert, SuccessAlert} from '../Alert'

export const NewGoalForm =({userId}) => {
    const [title, setTitle] = useState('')
   
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
const [message, setMessage] = useState('')
   
    
    const postGoal = async (e) =>
    {
        e.preventDefault()

        console.log('clicked')
        setError('');
        setMessage('');
        if (!title || !description) return setError('All fields are required!!')
        
        //goal structure

        let newGoal = {
            title,
            description,
            userId,
            createdAt: new Date().toISOString()
        } 

        let response = await fetch('/api/newGoal', {
            method: 'POST',
            body: JSON.stringify(newGoal),
        });


        //get the data

        let data = await response.json()
console.log( data)
        if (data.success) {
             // reset the fields
             setTitle('');
             setDescription('');
             // set the message
            return setMessage(data.message)
        } else {
            return setError(data.message)
        }


    }
    
    
    
    return (
        <div className="ml-40  my-12 px-15 bg-white justify-items-center flex bg-blue-200  flex-col shadow-2xl w-8/12 rounded-lg">
            <strong className=" my-2 mb-0 p-4 text-4xl ">New Goal </strong>
            <br />
            {error ? <ErrorAlert error={error} /> : null}
               
            {message ? <SuccessAlert msg={message} /> : null}
            
            <h1 className="text-3xl	mb-2 p-4 mt-0 underline ">What do you want to track and share:</h1>
            <form onSubmit={postGoal} className="form flex p-4 flex-col">
                {console.log(`in new goal ${userId}`)}

                
                <label htmlFor="track growth" className='mb-0 text-xl'>Give a label for your New Goal:</label>
                <br/>
                <input className="border border-gray-400 p-2 mb-4  rounded-lg appearance-none focus:border-gray-500 focus:outline-none" placeholder="What do you want to track" name="title" value={title}
                onChange={(e) => setTitle(e.target.value)} 
                    type="text" />
                <label className="mb-4  text-xl"htmlFor="today's Entry"  > Desribe your goal and start with first entry</label>

                <input type="text" placeholder="Your entry" className="border border-gray-400 rounded-lg p-2 mb-8 appearance-none focus:border-gray-500 focus:outline-none " name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button className="rounded-full bg-blue-600  p-1 m-4 border border-gray-600">Create and start sharing</button>
            </form>
            
            <div><h2>Displaying states</h2>
                <li>{title}</li>
                <li>{description}</li></div>

{/* comment schema */}
                {/* {"comment":{"content":"hmm",
                                "postId":"626680e708cb0488b0fddd23",
                                "creatorId":"62188a8cb3a1a130c249e039",
                                "createdAt":"2022-04-25T17:10:55.281Z",
                                "_id":"6266d61fef592dd975e2a920"}
                    } */}
        </div>


        
        
    )
}




  