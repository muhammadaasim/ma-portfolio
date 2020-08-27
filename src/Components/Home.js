import React from 'react'
import './theme.css'
import mwl from './mwl.svg'
import { Container, Col, Row } from 'react-bootstrap'
const Home = () => {
    return (
        <div className="bg-s h-p">
            <Container>
                <Row>
                    <Col className="h-text " xs={12} lg={8} md={8}  >
                        <div >
                            <h3>
                                Muhammad Aasim
                        </h3>
                            <p className="text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            
                        </p>
                        </div>
                    </Col>

                    <Col>
                        <img src={mwl} alt="Man With Laptop"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
