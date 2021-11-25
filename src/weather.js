import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './weather.css';
import Box from './component/Box';

class weather extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <div>
                            <h1 className="title">Weather</h1>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Box />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default (weather);