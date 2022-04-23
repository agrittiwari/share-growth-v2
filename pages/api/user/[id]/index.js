import clientPromise from "../../../../lib/mongodb"; 

import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    console.log(req.params.id)
  
    try {
        
      
        let _id = ObjectId(req.params.id)
        console.log(_id)
        //connect to database
        const client = await clientPromise;
        const db = client.db()

        //get details
        const response = await db.collection('users').find({_id})
        console.log(response.data)

        return res.json({response})

    } catch (error) {
        //return an error
        return res.json({
            message: new Error(error).message,
            success: false
        })
    }
}