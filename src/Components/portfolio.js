import React from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
const portfolio = () => {
    return (
        <div className="bg-s">
            <Container id="portfolio">
                <Row>
                    <Col>
                        <h3 className="text-center pt-5 pb-5">Portfolio</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12}>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="all" title="All">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Tab>
                            <Tab eventKey="WebDesign" title="Web Design">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Tab>
                            <Tab eventKey="Graphics" title="Graphics">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default portfolio
