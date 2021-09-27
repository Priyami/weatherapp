import React, { Component } from 'react';
import { Card, Button, Form, InputGroup, Col, CardGroup } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { WiDayThunderstorm } from "react-icons/wi";
import Dayweather from './Dayweather';
import { useState, useEffect } from 'react';
import background from "/src/images/Background.jpg";
import axios from 'axios';
import GetData from './GetData';

const Box = props => {
    const [showDayweather, setDayweather] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await axios.get('http://localhost:4000/')
            setDayweather(res.data)
            return res
        }
        getData()
    }, ['http://localhost:4000/']) 
    
    const toggle = () => setDayweather(!showDayweather);

    const data = Object.keys(showDayweather).map(function(key,value){
            return showDayweather[key]
    })
    return (
    
        <div className="box" style={{ backgroundImage: `url(${background})` }}>
             <Card style={{ width: '50rem' }} className="bg-dark text-white text-center">
                 <Card.Header>
                     <Form.Row>
                         <Form.Group as={Col}>
                             <InputGroup>
                                 <InputGroup.Prepend>
                                     <InputGroup.Text>
                                        <FaSearchengin />

                                     </InputGroup.Text>
                                 </InputGroup.Prepend>
                                 <Form.Control
                                     type="text"
                                     placeholder="Search here.."
                                     />
                             </InputGroup>
                         </Form.Group>
                     </Form.Row>
                </Card.Header>
                 {/* <Card.Body> */}
                     <GetData data={data}/>

                <Button onClick={toggle} variant="primary">More Details</Button>
                 {/* </Card.Body> */}
                     
               <Card.Footer className="text-muted"></Card.Footer>
             </Card>
        </div>
    )
}
export default Box;
