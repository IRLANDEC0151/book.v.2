import {Navbar, Nav, Button, Col} from "react-bootstrap";
import Link from "next/link";
import s from './Nav.module.scss'
import {useSession} from "next-auth/client";

export default function NavBar() {
    const [session, loading] = useSession()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand className={s.navBarBrand}>
                    <img
                        alt="logo"
                        src="/img/logo.svg"
                        className={s.logoImg}
                    />
                    <Nav.Link> <Link href='/'><a className={s.logoTitle}>Перекресток книг</a></Link></Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav> <Nav.Link><Link href='/library'><a className={s.navLink}>Библиотека</a></Link></Nav.Link>
                        </Nav>
                        <Nav> <Nav.Link><Link href='/places'><a className={s.navLink}>Места</a></Link></Nav.Link>
                        </Nav>
                        <Nav> <Nav.Link><Link href='/about'><a className={s.navLink}>О проекте</a></Link></Nav.Link>
                        </Nav>
                    </Nav>
                    {!session && (<>
                        <Nav>
                            <Nav.Link><Link href='/auth/register'><a
                                className={s.navLink}>Регистрация</a></Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link><Link href='/auth/login'><a className={s.navLink}>Войти</a></Link></Nav.Link>
                        </Nav>
                    </>)}
                    {session && (<>
                        <Nav>
                            <Nav.Link><Link href='/profile'><a className={s.navLink}>Профиль</a></Link></Nav.Link>
                        </Nav>
                    </>)}

                </Navbar.Collapse>
            </Navbar>
            <style jsx>{`
                  a {
                    text-decoration: none;
                    color:black;
                  }
            `}</style>
        </>
    )
}

