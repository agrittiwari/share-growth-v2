import clientPromise from "../../../../lib/mongodb"; 

import { ObjectId } from "mongodb";
export default async function handler(req, res)
{
   
    switch (req.method) {
        case 'GET': {
            return findUserById(req, res);
        }
      
        case 'DELETE': {
            return deleteUserById(req, res);
        }
    }
                         
}

 async function findUserById(req, res) 
 {
    let _id = ObjectId(req.query.userId)
    console.log(_id)
    console.log(`logging this... in api ${req.query.userId}`)
    try {
        
      
      
        //connect to database
        const client = await clientPromise;
        const db = client.db()

        //get details
        const details = await db.collection("users").find({_id})
       console.log(JSON.stringify(details))
        console.log(await details.next())
        console.log(await details.next())
        if (!details) {
            return res.status(402).json({ error: { message: 'Edit your Profile. No details found' } });
          }

        return res.json({details})

    } catch (error) {
        //return an error
        return res.json({
            message: new Error(error).message,
            success: false
        })
    }
}