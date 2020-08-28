import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const portfolio = () => {
    function callback(key) {
        console.log(key);
    }
    return (
        <div>
            <Container id="portfolio">
                <Row>
                    <Col>
                        <h3 className="text-center pt-5 pb-2">Portfolio</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={12} md={12} lg={12}>
                        <Tabs onChange={callback} type="card" centered>
                            <TabPane tab="Web Design" key="1">
                                Web Design Projects
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
