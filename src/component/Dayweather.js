import React, { Component } from 'react';
import { Card, Button, Form, Col, ListGroup } from 'react-bootstrap';
import { FaSearchengin } from 'react-icons/fa';
import { WiDayThunderstorm } from "react-icons/wi";
import { TiWeatherSunny, TiWeatherWindyCloudy, TiWeatherShower } from "react-icons/Ti";

const Dayweather = () => {
    return (
        <div>
            <Card style={{ width: '50rem' }} className="bg-dark text-white text-center">
                <Card.Header>
                    <Form.Row>
                        <Form.Group as={Col}>
                        </Form.Group>
                    </Form.Row>
                </Card.Header>
                <Card.Body>
                    <ListGroup >
                        <ListGroup.Item variant="dark">Thur <TiWeatherShower /> </ListGroup.Item>
                        <ListGroup.Item variant="dark">Fri <TiWeatherSunny /></ListGroup.Item>
                        <ListGroup.Item variant="dark">Sat <TiWeatherWindyCloudy /></ListGroup.Item>
                        <ListGroup.Item variant="dark">Sun <TiWeatherWindyCloudy /></ListGroup.Item>
                        <ListGroup.Item variant="dark">Mon <TiWeatherWindyCloudy /></ListGroup.Item>
                        <ListGroup.Item variant="dark">Tue <TiWeatherWindyCloudy /></ListGroup.Item>
                     </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    )
}
export default Dayweather;