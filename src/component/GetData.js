import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./GetData.css";
import DegreeContext from './store/degree-context';
const GetData = (data) => {
    let combinedData = { ...data.data[0], ...data.data[1], ...data.data[2] }
    let condition = { ...combinedData.condition };
    const ctx = useContext(DegreeContext);
    return (
        <Card.Body >
            <Card.Title> Current Weather in {combinedData.name} </Card.Title>
            <Card.Text>
                <Row className="justify-content-md-center">
                    <Col xs lg="2" className="temperature">
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
                    <Col xs lg="2" >
                        <Card.Text>  <img src={condition.icon} /> </Card.Text>
                    </Col>
                    <Row  >
                        <Card.Text>  {condition.text} </Card.Text>
                    </Row>
                </Row>
            </Card.Text>
            <Card.Text>Cloud:{combinedData.cloud}</Card.Text>
            <Card.Text>Humidity:{combinedData.humidity}</Card.Text>
            <Card.Text>Perciptition:{combinedData.precip_mm}</Card.Text>
            <Card.Text>{(ctx.degree === 'Farenheit') ? <div>Feelslike:{combinedData.feelslike_f}<span>&#8457;</span></div> : <div>Feelslike:{combinedData.feelslike_c} <span>&#8451;</span></div>}</Card.Text>
        </Card.Body>

    )
}
export default GetData;