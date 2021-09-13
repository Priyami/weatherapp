import React, { Component } from 'react';
import { Card,Button,Form,InputGroup, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "./Box.css";
export default class Box extends Component {
    render() {
        return (
            <div className = "box">
                <Card  style={{ width: '25rem' }} className="bg-dark text-white text-center">
                    <Card.Header>
                    <Form.Row>
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon="search" />           
                            </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Today's weather with icons</Card.Title>
                        <Card.Text>
                            Humidity:
                            Perciptition:
                            Moisture:
                        </Card.Text>
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>
        )
    }
}
