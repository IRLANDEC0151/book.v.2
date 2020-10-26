import Link from "next/link";
import {MainLayout} from "../../layouts/MainLayout";
import {Container, Row, Col, Button} from "react-bootstrap";
import {signOut, useSession,getSession } from "next-auth/client";
import isAuth from "../../src/middlewares/isAuth";

const Profile = () => {
    const [ session, loading ] = useSession()
    if (typeof window !== 'undefined' && loading) return null
    return (
        <MainLayout title='Профиль | Перекресток книг'>
            <Container>
                <Row>
                    <Col className='text-center mt-5'>
                        <h1>
                        Hello, this is Profile Page
                        </h1>
                        {session && <>
                            <h2>Вы вошли как <strong>{session.user.email}</strong></h2>
                            <button className='btn btn-danger mt-5' onClick={signOut}>Выйти</button>
                        </>}
                    </Col>
                </Row>
            </Container>

        </MainLayout>
    )
}
export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        context.res.writeHead(302, {Location: '/auth/login'});
        context.res.end();
    }
    return {
        props: {session}
    }
}
export default Profile
