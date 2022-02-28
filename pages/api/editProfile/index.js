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
        //connect to database
        const client = await clientPromise;
        const db = client.db()
         
        //update.details    
       const response = await db.collection('users').aggregate([ { $match: { _id: new ObjectId(req.body.userId) } },
            {
                $addFields: {
                    about: req.body.about,
                    twitterHandle: req.body.twitterHandle,
                    bioLink: req.body.bioLink,
                    goals: []
                }
            },
            { upsert: true }]
        )

        console.log(response)
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
