import { getProviders } from 'next-auth/client'

export default async (req, res) => {
    const providers = await getProviders({ req })
    console.log('Providers', providers)
    res.end()
}
