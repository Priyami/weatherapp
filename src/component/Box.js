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


const toggle = () => setDayweather(!showDayweather);

const Box = props => {
    const [showDayweather, setDayweather] = useState('');
    const weather = useWeather();
    
  /*  useEffect(() => {
        async function getData() {
            const res = await axios.get('http://localhost:4000/')
            setWeather(res.data)
            console.log(res.data)
            
        }
        getData()
    }) */
    
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
         

                <Button onClick={toggle} variant="primary">More Details</Button>
                  
                     
             </Card>
            
        </div>
    )
}
export default Box;
