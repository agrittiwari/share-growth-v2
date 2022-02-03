//import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
// import { connectToDatabase } from '../../lib/mongodb'

// export default withApiAuthRequired(
//     async (req, res) =>
//     {
//         try {
//             const { user } = getSession()
//             const {goal, entry, date}= req.body()
//         const {db} = await connectToDatabase()

//             const newGoal = await db.collection('entries').insertOne({
//                 userID: user.sub,
//                 date,
//                 goal,
//                 entry
//             })
// res.json(newGoal)

//         } catch (err) {
//             console.error(err.message)
//         }
       
//     })