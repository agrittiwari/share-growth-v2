import clientPromise from "../../../lib/mongodb"; 

import { ObjectId } from "mongodb";

export default async function handler(req, res)
{
   
    switch (req.method) {
        case 'POST': {
            return addNewGoal(req, res);
        }

        case 'DELETE': {
            return deleteGoal(req, res);
        }
    }
                         
}
    
async function addNewGoal(req, res)
{     
    try {

        
        let newGoal = JSON.parse(req.body)
        console.log(`In Backend ${newGoal}`)
        let id = ObjectId(newGoal.userId)

        console.log(newGoal.uerId, id)

        let {title, description, createdAt} = newGoal
        console.log(title, description, createdAt)
        
        if (!title || !description || !createdAt) {
            throw new Error("invalid Request") 
        }
        //connect to database
        const client = await clientPromise;
        const db = client.db()
          
        //add the goal    -JSON.parse(req.body)
         await db.collection('users').aggregate([
            { $match: { _id:id } },
            {$set: {
                goals: { $concatArrays: [goals, [newGoal]] } 
            }}
        ])
          
   
        //return a message
        return res.json({
            message: 'Goal added successfully',
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
