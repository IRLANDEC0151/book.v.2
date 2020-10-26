import Link from "next/link";
import {MainLayout} from "../../layouts/MainLayout";
import {Container, Row, Col, Button} from "react-bootstrap";

const Places = () => {
    return (
        <MainLayout title='Места | Перекресток книг'>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello, this is Places Page
                        </h1>
                    </Col>
                </Row>
            </Container>

        </MainLayout>
    )
}
export default Places