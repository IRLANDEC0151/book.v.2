import Link from "next/link";
import {MainLayout} from "../../../layouts/MainLayout";
import {Container, Row, Col, Button} from "react-bootstrap";
import {signIn, signOut, useSession, getSession} from 'next-auth/client'
import Profile from "../../profile";
import isAuth from "../../../src/middlewares/isAuth";


const Login = () => {
    const [session, loading] = useSession()
    if (typeof window !== 'undefined' && loading) return null
    if (session) {
    }
    return (
        <MainLayout title='Войти | Перекресток книг'>
            <Container>
                <Row>
                    <Col className='text-center mt-5'>
                        <h1>
                            Hello, this is Login Page
                        </h1>
                        {!session && <>
                            <h2>Войдите, чтобы продолжить</h2>
                            <Button className='btn-success btn-lg m-3' onClick={() => signIn('github')}>Войти с помощью
                                GitHub</Button>
                            <Button className='btn-success btn-lg m-3' onClick={() => signIn('google')}>Войти с помощью
                                Google</Button>
                        </>}
                    </Col>
                </Row>
            </Container>

        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session) {
        context.res.writeHead(302, {Location: '/profile'});
        context.res.end();
    }
    return {
        props: {session}
    }
}

export default Login
