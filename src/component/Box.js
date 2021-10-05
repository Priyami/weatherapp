import React, { Component } from 'react';
import { Card, Button, Form, InputGroup, Col } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { WiDayThunderstorm } from "react-icons/wi";
import Dayweather from './Dayweather';
import { useState, useEffect } from 'react';
import background from "/src/images/Background.jpg";
import axios from 'axios';
import GetData from './GetData';

//Created a method useWeather - using useEffect Hooks to get the data from server 
const Box = () => {
    const [showDayweather, setDayweather] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await axios.get('http://localhost:4000/')
            setDayweather(res.data)
            // return res
        }
        getData()
    }, ['http://localhost:4000/']) 
    
    // const toggle = () => setDayweather(!showDayweather);
    console.log(showDayweather, 'initial object')

    const concatObject = {...showDayweather.location, ...showDayweather.current}
    console.log(concatObject, 'first object')
    // console.log(concatObject.name, 'daaaaaaata')
  
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
                     <GetData data= {concatObject}/>

                {/* <Button onClick={toggle} variant="primary">More Details</Button> */}
                     
             </Card>
            
        </div>
    )

}
export default Box;
