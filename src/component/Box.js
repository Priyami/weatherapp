import React, { Component } from 'react';
import { Card, Button, Form, InputGroup, Col, CardGroup } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { WiDayThunderstorm } from "react-icons/wi";
import Dayweather from './Dayweather';
import { useState, useEffect } from 'react';
import background from "/src/images/Background.jpg";

const Box = props  => {
    const [showDayweather, setDayweather]  = useState(true);
        
        const toggle = () => setDayweather(!showDayweather);

        return (

            <div className="box" style={{ backgroundImage: `url(${background})` }}>
                
                <Card style={{ width: '50rem' }} className="bg-dark text-white text-center">
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
                       
                   <Button  onClick= {toggle} variant="primary">More Details</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>    
                {!showDayweather && <Dayweather/>}
                
            </div>
        )
    }
export default Box;
