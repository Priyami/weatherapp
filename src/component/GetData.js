import React, { Component } from 'react';
import { Card,Col,Row } from 'react-bootstrap';
import Metric from './Metric';
import "./GetData.css";

const GetData = (data) => {
    console.log(data.data, "server 4000")
    var combinedData = { ...data.data[0], ...data.data[1] }
    console.log(combinedData, 'combined')
    //console.log(combinedData.nested('condition').nested('icon'), "condition text");
    return (

        <div>

            {
                <Card.Body >
                    <Card.Title> Weather in {combinedData.name} </Card.Title>
                    
                    <Card.Text>
                        <Row>
                            <Col xs={6} md={4}> </Col>
                            <Col xs={6} sm={3} className= "temperature">{combinedData.temp_f}  &#8457; </Col>
                            <Col xs={6} md={4} className = "metric"><Metric></Metric></Col> 
                            
                        </Row>
                    </Card.Text>
                        <Card.Text>Cloud:{combinedData.cloud}</Card.Text>
                        <Card.Text>Humidity:{combinedData.humidity}</Card.Text>
                        <Card.Text>Perciptition:{combinedData.precip_mm}</Card.Text>
                        <Card.Text>Feelslike:{combinedData.feelslike_f}</Card.Text>
                    </Card.Body>
                }
        </div>
    )

}

            export default GetData;