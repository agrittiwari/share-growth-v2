
import { connectToDatabase } from '../../lib/mongodb'

export default  async function handler (req, res) 
{
    const { userId  } = req.body
       
        const { method } = req
        const { db } = await connectToDatabase()
    //console.log(user)
        switch (method) {
            case "POST":
                try {
                    const user = await db.collection('users').find({ _id: userId })
                    let checkedUser = JSON.stringify( user)
                    if (registerCheck) { console.log(`The user is save in DB ${ checkedUser}`) }
                    if (!registerCheck) {
                        const registeredUser = await db.collection('users').insertOne({ userId: user.sub, email: user.email, picture: user.picture })
                        console.log(registeredUser)
                        let checkedUser = JSON.parse(registeredUser)
                        console.log(checkedUser)
                res.status(200).json({success:true})
                    }
                    res.status(200).json({ success:true })
                    } catch (err) {
                    res.status(500).json({ msg: err.message })
                }
                break;
            case "GET":
                try {
                    let user = await db.collection('users').find({ _id: userId })
if(!user) res.status(401).json({msg:'User not found!'})

                    user = JSON.stringify(user)
                    console.log(user)
                    res.status(200).json(user)
                } catch (err) {
                    res.status(500).json({ msg: err.message })
                }
                break;
            default:
                res.status(500).json({msg:err.message})
        }    
}