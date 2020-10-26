import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
        // ...add more providers here
    ],
}

export default (req, res) => NextAuth(req, res, options)
