import { getSession } from "next-auth/react";
import clientPromise from "../../../lib/mongodb"; 

const ObjectId = require('mongodb').ObjectId;




export default async function handler(req, res)
{
   
    switch (req.method) {
        case 'POST': {
            return addGoal(req, res);
        }

        case 'DELETE': {
            return deleteGoal(req, res);
        }
    }
                         
}
    
async function addGoal(req, res)
{     
    try {

        
        //connect to database
        const client = await clientPromise;
        const db = client.db()
          
        //add the goal    -JSON.parse(req.body)
     const response =   await db.collection('users').updateOne({ _id:  ObjectId(req.body.userId) }, {
            $set: {
                goals: JSON.parse(req.body)
            } },
            { $upsert: true })
   
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
