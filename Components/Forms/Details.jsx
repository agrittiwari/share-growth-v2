import { useState } from "react"
import { SuccessAlert, ErrorAlert} from "../Alert";




export const EditDetails = ({userId}) =>
{ const [error, setError] = useState('');
const [message, setMessage] = useState('');

const [about, setAbout] = useState('');
const [twitterHandle, setTwitterHandle] = useState('')
const [bioLink, setBioLink] = useState('')

const postDetails = async (e) =>
{
    e.preventDefault()

    setError('')
    setMessage('')

    if(!about || !twitterHandle || !bioLink) return setError('All Fields are necessary!')
    let details = {
        about,
        twitterHandle,
        bioLink,
        userId,
        goals:[]

}
    console.log(JSON.stringify(details))
    console.log(details)
    //console.log(JSON.parse(details))
    try {
        const response = await fetch('/api/editProfile', {
            method: 'POST',
            body: JSON.stringify(details)
        })
    
            //get the data
    
            let data = await response.json()
    console.log( `this is from details component ${data.message}`)
            if (data.success) {
                 // reset the fields
                 setAbout('');
                setTwitterHandle('');
                setBioLink('')
                 // set the message
                return setMessage(data.message)
            } else {
                return setError(data.message)
            }
    
    
    } catch (err) {
        console.error('error happened here', error)
    }
   
}
    return (
        <div className="m-100 p-10 mt-20 px-70 border-1  bg-blue-200  flex flex-col shadow-2xl rounded-lg w-11/12 inset-5">


            
                     {error ? <ErrorAlert error={error} /> : null}
               
                {message ? <SuccessAlert msg={message}/>: null}
                
        <strong className="underline">Edit your Profile here!</strong>
        

        <form onSubmit={postDetails} className="form my-3 flex flex-col">
           
        <label className="p-2 decoration-solid	" >About</label>
        <input className="form-input border border-gray-400 p-6 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" name="about" value={about} onChange={(e)=>setAbout(e.target.value)}   type="text" placeholder="Write about yourself and what are you going to share" />
           
        <label className="p-2 decoration-solid	">Twitter Username <i className="fa fa-twitter" aria-hidden="true"></i></label>
         <input type="text" className="form-input border border-gray-400 p-2 rounded-lg appearance-none focus:border-gray-500 focus:outline-none" name="twitterHandle" value={twitterHandle} onChange={(e) =>setTwitterHandle(e.target.value)}  placeholder="twitter username" />
       
        <label className="p-2 decoration-solid	">Link you want to share</label>
        <input className="form-input border border-gray-400 p-2 rounded-lg appearance-none focus:border-gray-500 focus:outline-none mb-4" name="bioLink" value={bioLink} onChange={(e)=>setBioLink(e.target.value)} type="text" placeholder="your go-to biolink" />

            <button type="submit" className="rounded-full bg-blue-600  p-1 border border-gray-600">Update</button>

    </form>
      </div>
)
     
} 
 
export const RenderDetails = () =>
{
    return (
        <div><li>about</li>
            <li>bioLink</li><li>
            TwitterHandle</li></div>
    )
}