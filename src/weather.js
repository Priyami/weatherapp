import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './weather.css';
import Box from './component/Box';

class weather extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Container>

                        <Row>
                            <Col>
                            <div>
                                <h1 className="title">Weather</h1>
                            </div>
                            </Col>
                        </Row>
                        <br>
                        </br>


                        <Row>

                            <Col>
                                <Card body>

                                    <Box></Box>
                                </Card>

                            </Col>

                        </Row>


                    </Container>
                </React.Fragment>
            </div>
        )
    }
}

export default (weather);