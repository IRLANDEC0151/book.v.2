import {Container, Row, Col, Button, Form, InputGroup, FormControl} from "react-bootstrap";
import s from './SearchHome.module.scss'
import SearchForm from "./searchForm/SearchForm";

const SearchHome = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.blackout}></div>
                <Container fluid className={s.searchArea}>
                    <Row className={s.supportRow}>
                        <Col lg={3} className='text-center'>
                            <Button>Поддержать проект</Button>
                        </Col>
                        <Col lg={{span: 3, offset: 6}} className='text-center'>
                            <Button>Обновить статус книги</Button>
                        </Col>
                    </Row>
                    <Row className={s.titleRow}>
                        <Col className='text-center'>
                            <p>Книга найдется для каждого</p>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <SearchForm/>
                    </Row>

                </Container>
            </header>

        </>
    )
}

export default SearchHome