import { getSession } from "next-auth/react";
import {connectToDatabase} from '../../../lib/mongodb'

export default async (req, res) =>
{
    const session = await getSession({ req });
    console.log({ ...session })
    if (session) {
        res.send({
            content:'Edit the profile'
        })
    } else {
        res.send({
            error:'You need to be signed in!'
        })
    }
}