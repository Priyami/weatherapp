import React, { Component } from 'react';
import { Card,Button,Form,InputGroup, Col} from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { WiDayThunderstorm } from "react-icons/wi";


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
                                    <FaSearchengin />
                               
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
                        <Card.Title>Weather in Boston</Card.Title>
                        <Card.Text>10 deg C</Card.Text>
                        <Card.Text><WiDayThunderstorm /> Cloudy ThunderStorm</Card.Text>
                        <Card.Text>Humidity:</Card.Text>
                        <Card.Text>Perciptition:</Card.Text>
                        <Card.Text>Moisture:</Card.Text>
                       
                        <Button variant="primary">More Details</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>
        )
    }
}
