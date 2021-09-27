import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import './weather.css';
import Box from './component/Box';

class weather extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                   

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
                                {/* <Card body> */}

                                    <Box>
                                        
                                    </Box>
                                {/* </Card> */}

                            </Col>

                        </Row>


                   
                </React.Fragment>
            </div>
        )
    }
}

export default (weather);