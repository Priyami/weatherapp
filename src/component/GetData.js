import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { WiDayThunderstorm } from "react-icons/wi";


const GetData = (data) => {
//data combined to have single json object 
    var combinedData = {...data.data[0], ...data.data[1]}
    console.log(data.data[0], 'data from get data comp')
    console.log(combinedData, 'combined')

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