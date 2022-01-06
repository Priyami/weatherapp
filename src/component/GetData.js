import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./GetData.css";
import DegreeContext from './store/degree-context';
const GetData = (data) => {
    let combinedData = { ...data.data[0], ...data.data[1], ...data.data[2] }
    return (
        <DegreeContext.Consumer>
            {(ctx) => {
                return (
                    <Card.Body >
                        <Card.Title> Current Weather in {combinedData.name} </Card.Title>
                        <Card.Text>
                            <Row>
                                <Col className="temperature">
                                    {(ctx.degree === 'Farenheit')
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
                        <Card.Text>{(ctx.degree === 'Farenheit') ? <div>Feelslike:{combinedData.feelslike_f}<span>&#8457;</span></div> : <div>Feelslike:{combinedData.feelslike_c} <span>&#8451;</span></div>}</Card.Text>
                    </Card.Body>
                )
            }}
        </DegreeContext.Consumer>
    )
}
export default GetData;