import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import moment from 'moment';
import "./Weekweather.css";

const Weekweather = (props) => {
    var combinedData = {...props.data[0], ...props.data[1], ...props.data[2]}
    var forecast = combinedData.forecastday;
    
    function dayDate(date){
        return new moment(date).format('ddd')
    }
    return (
        <div>
           <Card  className="bg-dark text-white text-center">
                
                <Card.Body >
                    {forecast.map((forecast,id) => (
                    <ListGroup  className = "list-group-forecast " key = {id} >
                        <ListGroup.Item className = "bg-dark text-white text-center ">{dayDate(forecast.date)}</ListGroup.Item>
                        <ListGroup.Item>{forecast.day.condition.text}</ListGroup.Item>
                        <ListGroup.Item><img src = {forecast.day.condition.icon}/></ListGroup.Item>
                        </ListGroup>
                     ))}
                </Card.Body>
            </Card>
        </div>
    )
}
export default Weekweather;