import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./GetData.css";

const GetData = (data) => {
    let combinedData = { ...data.data[0], ...data.data[1], ...data.data[2] }
    return (

        <div>
            <Card.Body >
                <Card.Title> Current Weather in {combinedData.name} </Card.Title>
                <Card.Text>
                    <Row>
                        <Col className="temperature">
                            {(data.degree === 'Farenheit')
                                ?

                                <div>
                                    {combinedData.temp_f}
                                    <span>&#8457;</span>
                                </div>

                                :
                                <div>
                                    {combinedData.temp_c}
                                    <span>&#8451;</span>
                                </div>
                            }
                        </Col>

                    </Row>
                </Card.Text>
                <Card.Text>Cloud:{combinedData.cloud}</Card.Text>
                <Card.Text>Humidity:{combinedData.humidity}</Card.Text>
                <Card.Text>Perciptition:{combinedData.precip_mm}</Card.Text>
                <Card.Text>{(data.degree === 'Farenheit')?<div>Feelslike:{combinedData.feelslike_f}<span>&#8457;</span></div>:<div>Feelslike:{combinedData.feelslike_c} <span>&#8451;</span></div>}</Card.Text>
            </Card.Body>

        </div>
    )

}

export default GetData;