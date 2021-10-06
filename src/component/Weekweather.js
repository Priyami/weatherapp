import React from 'react';
import { Card, Form, Col, ListGroup } from 'react-bootstrap';
import { TiWeatherSunny, TiWeatherWindyCloudy, TiWeatherShower } from "react-icons/Ti";

const Weekweather = (props) => {
    var combinedData = {...props.data[0], ...props.data[1], ...props.data[2]}
    var forecast = combinedData.forecastday;
    console.log("combined", combinedData);
    console.log("text", combinedData.forecastday);
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
                        <ListGroup.Item variant="dark">Thur {forecast.condition.text}<TiWeatherShower /> </ListGroup.Item>
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
export default Weekweather;