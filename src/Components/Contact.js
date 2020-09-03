import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FormControl, TextField, makeStyles, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ScrollAnimation from 'react-animate-on-scroll';
import './theme.css'
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    textwidth: {
        width: '90%',
    }
}));
const Contact = () => {
    const classes = useStyles();
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
                        <form>
                            <FormControl>
                                <div className="text-left">
                                    <div class="mb-2">
                                        <AccountCircle className="mt-4 mr-2" />
                                        <TextField id="input-with-icon-grid" label="First Name" className="txtname" />
                                        <AccountCircle className="mt-4 mr-2" />
                                        <TextField id="input-with-icon-grid" label="Last Name" />
                                    </div>
                                    <AccountCircle className="mt-4 mr-2" />
                                    <TextField id="input-with-icon-grid" label="Email" className={classes.textwidth} />

                                    <AccountCircle className="mt-4 mr-2" />
                                    <TextField id="input-with-icon-grid" label="Phone Number" className={classes.textwidth} />
                                    <AccountCircle className="mt-4 mr-2" />
                                    <TextField id="input-with-icon-grid" fullWidth multiline
                                        rows={4} label="Message" className={classes.textwidth} />


                                    <Button variant="contained" color="primary" style={{ width: 120, marginLeft: 30, }}>
                                        Send
                            </Button>
                                </div>
                            </FormControl>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
