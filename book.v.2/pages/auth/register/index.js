import Link from "next/link";
import {MainLayout} from "../../../layouts/MainLayout";
import {Container, Row, Col, Button} from "react-bootstrap";

const Register = () => {
    return (
        <MainLayout title='Регистрация | Перекресток книг'>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello, this is Register Page
                        </h1>
                    </Col>
                </Row>
            </Container>

        </MainLayout>
    )
}
export default Register