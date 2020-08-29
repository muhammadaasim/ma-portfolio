import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FormControl, TextField, makeStyles, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    textwidth: {
        width: '92%',
    }
}));
const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Container id="contact">
                <Row>
                    <Col>
                        <h3 className="text-center pt-5 pb-5">Contact Me</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>

                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <FormControl>
                            <span className="mb-2">
                                <AccountCircle className="mt-4 mr-2" />
                                <TextField id="input-with-icon-grid" label="First Name" />
                                <span>
                                    <AccountCircle className="mt-4 mr-2" />
                                    <TextField id="input-with-icon-grid" label="Last Name" />
                                </span>
                            </span>
                            <span>
                                <AccountCircle className="mt-4 mr-2" />
                                <TextField id="input-with-icon-grid" label="Email" className={classes.textwidth} />
                            </span>

                            <span className="mb-2">
                                <AccountCircle className="mt-4 mr-2" />
                                <TextField id="input-with-icon-grid" label="Phone Number" className={classes.textwidth} />
                            </span>
                            <span className="mb-4">
                                <AccountCircle className="mt-4 mr-2" />
                                <TextField id="input-with-icon-grid" fullWidth multiline
                                    rows={4} label="Message" className={classes.textwidth} />
                            </span>

                            <Button variant="contained" color="primary" style={{ width: 120, marginLeft: 30, }}>
                                Send
                            </Button>
                        </FormControl>
                    </Col>
                </Row >
            </Container >
        </div >
    )
}

export default Contact
