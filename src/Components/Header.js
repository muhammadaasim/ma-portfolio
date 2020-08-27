import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navbar collapseOnSelect expand="lg" >
                            <Navbar.Brand href="#home">MA</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <Nav className="mr-5">
                                    <Nav.Link href="#Home">Features</Nav.Link>
                                    <Nav.Link href="#Services">Services</Nav.Link>
                                    <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                                    <Nav.Link href="#Contact">Contact</Nav.Link>
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
