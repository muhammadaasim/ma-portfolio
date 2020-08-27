import React from 'react'
import './theme.css'
import mwl from './mwl.svg'
import { Container, Col, Row } from 'react-bootstrap'
import useWebAnimations, { flipInX } from "@wellyshen/use-web-animations";
import Typewriter from 'typewriter-effect';

const Home = () => {
    const { ref, playState } = useWebAnimations({ ...flipInX });
    return (
        <div className="bg-s h-p">
            <Container>
                <Row>
                    <Col className="h-text " xs={12} lg={6} md={7}  >
                        <div ref={ref}>
                            <h3>
                                Muhammad Aasim
                            </h3>
                            <p className="text-left">

                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Hello there! I am Web Developer who knows HTML,CSS,JS,Bootstrap, React.js')
                                            .callFunction(() => {
                                                console.log('String typed out!');
                                            })
                                            .pauseFor(2500)
                                            .deleteAll()
                                            .callFunction(() => {
                                                console.log('All strings were deleted');
                                            })
                                            .start();
                                    }}
                                />

                            </p>
                        </div>
                    </Col>

                    <Col xs={12} lg={6} md={5}>
                        <img src={mwl} alt="Man With Laptop" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
