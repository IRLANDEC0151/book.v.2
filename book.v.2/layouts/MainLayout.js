import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./partials/navBar/Nav";
export const MainLayout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/img/logo.svg"/>
            </Head>
                <NavBar/>
            <main>
                {children}
            </main>
        </>
    )
}
