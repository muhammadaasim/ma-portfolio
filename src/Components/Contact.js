import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FormControl, TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ScrollAnimation from 'react-animate-on-scroll';
import CU from './imgs/contactus.svg'
import useWebAnimations from "@wellyshen/use-web-animations";
import MuiPhoneNumber from 'material-ui-phone-number'
import './theme.css'
const Contact = () => {
    const { ref: illustration, getAnimation } = useWebAnimations({
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
        },
    });

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div id="contact">
            <Container>
                <Row>
                    <Col>
                        <ScrollAnimation animateIn="fadeInUp">
                            <h3 className="text-center ppt-5 mt-4 pb-3">Contact Me</h3>
                        </ScrollAnimation>
                    </Col>
                </Row>
                <Row>

                    <Col xs={12} sm={12} md={7} lg={7} xl={7} className="pb-5">
                        <img src={CU} alt="Contact US" ref={illustration} onMouseEnter={() => getAnimation().pause()} onMouseLeave={() => getAnimation().play()} />
                    </Col>
                    <Col xs={12} sm={12} md={5} lg={5} xl={5}>
                        <div className="contactform">
                            <FormControl>
                                <div className="mb-1">
                                    <TextField id="input-with-icon-grid" label="First Name" className="txtname mr-2" />
                                    <TextField id="input-with-icon-grid" label="Last Name" className="txtname mb-1" />
                                </div>
                                <TextField id="input-with-icon-grid" label="Email" className="txtbox mb-3" />
                                <MuiPhoneNumber defaultCountry={'pk'} className="txtbox mb-2" />
                                <TextField id="input-with-icon-grid" multiline rows={4} label="Message" className="txtbox mb-3" />
                                <Button variant="contained" color="primary" style={{ width: 130 }} onClick={handleClick}>
                                    Send
                                    </Button>
                            </FormControl>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
        </Alert>
            </Snackbar>
        </div>
    )
}
export default Contact;
