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

//Created a method useWeather - using useEffect Hooks to get the data from server 
const useWeather = () => {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        let mounted = true
        
        axios.get('http://localhost:4000/')
            .then((result) => {
                if (mounted) {
                    setWeather(result.data)
                    console.log(result.data)
                }
                
                return () => mounted = false;
                
            })
    }, [])
    return weather
}


//Function component starts here
const Box = props => {
    const [toggle, setToggle] = useState(false) //toggle More detail button
    const weather = useWeather();
    
     //response data from weatherapi - map to key object
    let data = Object.keys(weather).map((key) =>{
        console.log("example", weather[key]);
             return weather[key]
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
                
                    
                    <GetData data = {data}></GetData>
         
            <Button onClick={() => setToggle(!toggle)} variant="primary">More Details</Button>
                 {!toggle && <Dayweather></Dayweather>}
                     
             </Card>
            
        </div>
    )
}
export default Box;
