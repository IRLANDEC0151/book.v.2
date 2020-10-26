import NextNprogress from 'nextjs-progressbar';
import {Provider} from 'next-auth/client'

function MyApp({Component, pageProps}) {
    return (
        <Provider session={pageProps.session}>
            <NextNprogress options={{showSpinner: false, speed: 500, startPosition: 0.4, stopDelayMs: 100}}
                           color="#29D"
                           height="3"
            />
            <Component {...pageProps} />
            <style jsx global>{`
                html{
                font-size:10px;
                }
            `}</style>
        </Provider>
    )
}

export default MyApp
