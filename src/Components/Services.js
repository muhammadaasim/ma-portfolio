import React from 'react'
import WD from './imgs/webdesign.svg'
import { Container, Row, Col } from 'react-bootstrap'
const Services = () => {
    return (
        <div>
            <Container id="services">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h3 className="text-center pt-5 pb-5">My Services</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                        <img src={WD} alt="Web Design" />
                        <h5>Web Designing</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                        <img src={WD} alt="Web Design" />
                        <h5>Web Designing</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                        <img src={WD} alt="Web Design" />
                        <h5>Web Designing</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <img src={WD} alt="Web Design" />
                        <h5>Web Designing</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <img src={WD} alt="Web Design" />
                        <h5>Web Designing</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={4}>
                        <img src={WD} alt="Web Design" />
                        <h5>Web Designing</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services
