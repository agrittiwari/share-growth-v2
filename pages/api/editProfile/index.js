import clientPromise from "../../../lib/mongodb"; 

import { ObjectId } from "mongodb";
export default async function handler(req, res)
{
   
    switch (req.method) {
        case 'POST': {
            return updateDetails(req, res);
        }

        case 'DELETE': {
            return deleteGoal(req, res);
        }
    }
                         
}

async function updateDetails(req, res)
{
   
    
    try {
        let updatedDetails = JSON.parse(req.body)
        console.log(updatedDetails)

        let id = ObjectId(updatedDetails.userId)
        
        console.log(updatedDetails.userId, id)
       
        let {about, twitterHandle, bioLink, goals} = updatedDetails
        console.log(about, twitterHandle, bioLink, goals)
        //console.log(JSON.parse(req.body))
        if (!about || !twitterHandle || !bioLink) {
            
            throw new Error("Invalid Request");
        }

        //connect to database
        const client = await clientPromise;
        const db = client.db()
         
        //update.details    
        const response = await db.collection('users').updateOne({ _id: id }, {
            $set: {
                about: updatedDetails.about,
                twitterHandle: updatedDetails.twitterHandle,
                bioLink: updatedDetails.bioLink,
                goals: updatedDetails.goals
            }
        }, {
            upsert: true   
        })

        console.log(response.data)
        //return a message
        return res.json({
            message: 'Details updated successfully',
            success: true
        })
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        })
    }
    
}   
