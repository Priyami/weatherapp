import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { WiDayThunderstorm } from "react-icons/wi";


const GetData = (data) => {

    var combinedData = {...data.data[0], ...data.data[1]}
    console.log(data.data[0], 'data from get data comp')
    console.log(combinedData, 'combined')

    return (
        
        <div>
               
                {
                     <Card.Body >
                             <Card.Title> Weather in {combinedData.name} </Card.Title>
                             <Card.Text>{combinedData.temp_f} F </Card.Text>
                             <Card.Text><WiDayThunderstorm />{combinedData.text} Cloud:{combinedData.cloud}</Card.Text>
                             <Card.Text>Humidity:{combinedData.humidity}</Card.Text>
                             <Card.Text>Perciptition:{combinedData.precip_mm}</Card.Text>
                             <Card.Text>Feelslike:{combinedData.feelslike_f}</Card.Text>
                    </Card.Body>
                }
        </div>
    )

}

export default GetData;