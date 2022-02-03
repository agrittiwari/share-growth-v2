import NextAuth from "next-auth"
import { getProviders } from "next-auth/react"

//import nodemailer from "nodemailer"

export default async (req, res) => {
  const providers = await getProviders()
  console.log("Providers", providers)
  res.end()
}

// export default async (req, res) => {
//   const providers = await getProviders()
//   // Configure one or more authentication providers
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//      Providers.Google({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   }),
//     // Passwordless / email sign in
//     Providers.Email({
//       server: {
//         host: process.env.EMAIL_SERVER_HOST,
//         port: process.env.EMAIL_SERVER_PORT,
//         auth: {
//           user: process.env.EMAIL_SERVER_USER,
//           pass: process.env.EMAIL_SERVER_PASSWORD
//         }
//       },
//       from: process.env.EMAIL_FROM
//     }),
//     // ...add more providers here
//   ],

//   // A database is optional, but required to persist accounts in a database
//   database: process.env.MONGODB_URI,
// })