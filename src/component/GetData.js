import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { WiDayThunderstorm } from "react-icons/wi";


const GetData = (props) => {

    // console.log(props.data.name, 'get data')

    return (
        <> 
            <Card.Body> 
                             <div>
                                 <Card.Title> Weather in {props.data.name} </Card.Title>
                                 <Card.Text>{props.data.temp_f} F </Card.Text>
                                 <Card.Text><WiDayThunderstorm /> Cloud:{props.data.cloud}</Card.Text>
                                 <Card.Text>Humidity:{props.data.humidity}</Card.Text>
                                 <Card.Text>Precipition:</Card.Text>
                                 <Card.Text>Moisture:</Card.Text>
                             </div> 
   
            </Card.Body>
        </>
    )
}

export default GetData;