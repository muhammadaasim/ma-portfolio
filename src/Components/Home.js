import React from 'react'
import './theme.css'
import mwl from './mwl.svg'
import { Container, Col, Row } from 'react-bootstrap'
import useWebAnimations,{fadeIn} from "@wellyshen/use-web-animations";
import Typewriter from 'typewriter-effect';
const Home = () => {
    const {ref:namee}=useWebAnimations({...fadeIn});
    const { ref: illustration,getAnimation} = useWebAnimations({
          keyframes: [
            { transform: "translate(0,0)" },
            { transform: "translate(0,30px)" },
            { transform: "translate(0,0)" },
          ],
          timing: {
            delay: 400, // Start with a 500ms delay
            duration: 3000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
          },});

    return (
        <div className="bg-s h-p bg-pattern" id="home">
            <Container>
                <Row>
                    <Col className="h-text " xs={12} sm={12} lg={6} md={7} xl={6}  >
                        <div>
                            <h3 ref={namee}> Muhammad Aasim </h3>
                            <p className="text-left">
                                <div className="typewriter">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Hello there!, I am Web Developer who knows HTML,CSS,JS,Bootstrap, React.js')
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
                                </div>
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} lg={6} md={5} xl={6}>
                        <img src={mwl} alt="Man With Laptop" className="home-illustration" ref={illustration} onMouseEnter={()=>getAnimation().pause()} onMouseLeave={()=>getAnimation().play()}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
