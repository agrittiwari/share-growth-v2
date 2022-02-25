import { getSession } from "next-auth/react";
const { connectToDatabase } = require('../../lib/mongodb');

export default async function handler(req, res)
{
    const session = await getSession({ req });

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