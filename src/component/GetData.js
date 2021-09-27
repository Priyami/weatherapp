import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { WiDayThunderstorm } from "react-icons/wi";


const GetData = (props) => {
    // console.log(props.data, 'data from get data comp')
    return (
        <div>
            <Card.Body>
                {props.data.map(d => (
                         <div div key={d.key}>
                         <Card.Title> Weather in {d.name} </Card.Title>
                         <Card.Text>{d.temp_f} F </Card.Text>
                         <Card.Text><WiDayThunderstorm /> Cloud:{d.cloud}</Card.Text>
                         <Card.Text>Humidity:{d.humidity}</Card.Text>
                         <Card.Text>Perciptition:</Card.Text>
                         <Card.Text>Moisture:</Card.Text>
                        </div>
   
                ))}
            </Card.Body>
        </div>
    )

}

export default GetData;