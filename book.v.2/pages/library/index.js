import Link from "next/link";
import {MainLayout} from "../../layouts/MainLayout";
import {Container, Row, Col, Button} from "react-bootstrap";

const Library = () => {
    return (
        <MainLayout title='Библиотека | Перекресток книг'>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello, this is Library Page
                        </h1>
                    </Col>
                </Row>
            </Container>

        </MainLayout>
    )
}
export default Library