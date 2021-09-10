import React, { Component } from 'react';
import { Card,Button } from 'react-bootstrap';
import "./Box.css";
export default class Box extends Component {
    render() {
        return (
            <div>
                <Card className="text-center" className="bg-dark text-white">
                    <Card.Header>Search Box</Card.Header>
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
