import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import WD from './imgs/webdesign.svg'
import ScrollAnimation from 'react-animate-on-scroll';
const { TabPane } = Tabs;
const portfolio = () => {
    function callback(key) {
        console.log(key);
    }
    return (
        <div id="portfolio">
            <Container>
                <Row>
                    <Col>
                    <ScrollAnimation animateIn="fadeInUp">
                        <h3 className="text-center pt-5 mt-4 pb-3">Portfolio</h3>
                    </ScrollAnimation>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12}>
                        <Tabs onChange={callback} type="card" centered>
                            <TabPane tab="Web Design" key="1">
                                <Row>
                                                    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div class="card-body">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={WD} alt="Web Design" className="card-img" />
                            </ScrollAnimation>
                            <p className="title">Web Designing</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                                        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div class="card-body">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={WD} alt="Web Design" className="card-img" />
                            </ScrollAnimation>
                            <p className="title">Web Designing</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                                        <Col xs={12} sm={6} md={4} lg={4} xl={4}>
                        <div class="card-body">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={WD} alt="Web Design" className="card-img" />
                            </ScrollAnimation>
                            <p className="title">Web Designing</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="Graphic Design" key="2">
                                Graphic Design Projects.
                            </TabPane>

                        </Tabs>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default portfolio
