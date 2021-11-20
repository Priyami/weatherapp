import React from 'react';
import { Card, Form, Col, ListGroup } from 'react-bootstrap';

const Weekweather = (props) => {
    var combinedData = {...props.data[0], ...props.data[1], ...props.data[2]}
    var forecast = combinedData.forecastday;
    
    var list = [ "Sun", "Mon", "Tue", "Wed","Thur", "Fri", "Sat"];

    console.log("three dates",forecast);
    console.log("first date", forecast[0].date);
    function dayDate(date){
        console.log("inside function",date);
        var d = new Date(date);
        console.log(d);
        var n = d.getDay(); 
        console.log(n);
        console.log(list[n+1]);
        return list[n+1];
     
    }
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
                        <ListGroup.Item variant="dark">{dayDate(forecast[0].date)}  {forecast[0].day.condition.text}  <img src = {forecast[0].day.condition.icon}/></ListGroup.Item>
                        <ListGroup.Item variant="dark">{dayDate(forecast[1].date)}  {forecast[1].day.condition.text}  <img src = {forecast[1].day.condition.icon}/></ListGroup.Item>
                        <ListGroup.Item variant="dark">{dayDate(forecast[2].date)}  {forecast[2].day.condition.text}  <img src = {forecast[2].day.condition.icon}/></ListGroup.Item>
                     </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    )
}
export default Weekweather;