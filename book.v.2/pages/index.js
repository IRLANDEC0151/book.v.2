import Head from 'next/head'
import Link from "next/link";
import {MainLayout} from "../layouts/MainLayout";
import {Container, Row, Col, Button} from "react-bootstrap";
import HomePage from "../src/components/homePage/HomePage";

 const Index = () => {
    return (
        <MainLayout title='Главная страница | Перекресток книг'>
            <HomePage/>
        </MainLayout>
    )
}
export  default Index