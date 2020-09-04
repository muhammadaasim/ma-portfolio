import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FormControl, TextField, Button } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import './theme.css'
const Contact = () => {
    return (
        <div>
            <Container id="contact">
                <Row>
                    <Col>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h3 className="text-center pt-5 pb-5">Contact Me</h3>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row>

                    <Col xs={12} sm={12} md={7} lg={7} xl={7}>

                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                          <div className="contactform">
                            <FormControl>
                                    <div className="mb-1">
                                    <TextField id="input-with-icon-grid" label="First Name" className="txtname mr-2"/>
                                    <TextField id="input-with-icon-grid" label="Last Name"  className="txtname mb-1"/>
                                    </div>
                                    <TextField id="input-with-icon-grid" label="Email" className="txtbox mb-1" />
                                    <TextField id="input-with-icon-grid" label="Phone Number" className="txtbox mb-1"/>
                                    <TextField id="input-with-icon-grid" multiline rows={4} label="Message" className="txtbox mb-3"/>
                                    <Button variant="contained" color="primary" style={{ width: 130}}>
                                        Send
                                    </Button>
                            </FormControl>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
