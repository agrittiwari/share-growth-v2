import { getSession } from "next-auth/react";
const { clientPromise } = require('../../../lib/mongodb');
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
    // const session = await getSession({ req });

    // if (session) {
    //      // switch the methods
    
    // }
    // } else {
    //     res.send({
    //         error:'You need to be signed in!'
    //     })
    // }

                         
}
    
async function addGoal(req, res){
    try {
        //connect to database
        const client = await clientPromise;
        const db = client.db()
       
        //add the goal
        await db.collection('goals').insertOne(JSON.parse(req.body));

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
