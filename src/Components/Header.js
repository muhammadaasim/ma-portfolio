import React from 'react'
import './theme.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

const Header = () => {

    return (
        <div className="bg-s">
            <Container>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
                            <Navbar.Brand href="#home">MA</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <Nav className="mr-5">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#services">Services</Nav.Link>
                                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                                    <Nav.Link href="#contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
