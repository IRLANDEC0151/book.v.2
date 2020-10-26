import {Container, Row, Col, Button, Form, InputGroup, FormControl} from "react-bootstrap";
import s from './SearchForm.module.scss'

const SearchForm = () => {
    return (
        <>
            <Form className={s.formRow} inline>
                <Form.Control className={s.searchInput} id="inlineFormInputName"
                              placeholder="Автор или произведение"/>
                <Button type="submit">Найти</Button>
            </Form>
        </>
    )
}

export default SearchForm