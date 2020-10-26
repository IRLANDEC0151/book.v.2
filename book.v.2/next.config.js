require('dotenv').config()

module.exports = {
    env: {
        MONGO_URI: process.env.MONGO_URI,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
    }
}
