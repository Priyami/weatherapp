import React, { Component } from 'react';
import { Card, Button, Form, InputGroup, Col, CardGroup } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { WiDayThunderstorm } from "react-icons/wi";
import Dayweather from './Weekweather';
import { useState, useEffect } from 'react';
import background from "/src/images/Background.jpg";
import axios from 'axios';
import GetData from './GetData';
import Weekweather from './Weekweather';


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





const useWeekweather = () => {
    const [showWeekweather, setWeekweather] = useState([]);

    useEffect(() => {
        let mounted = true
        
        axios.get('http://localhost:4000/week')
            .then((res) => {
                if (mounted) {
                    setWeekweather(res.data)
                    console.log(res.data)
                }
                
                return () => mounted = false;
                
            })
    }, [])
    return showWeekweather

}

const Box = props => {

    const [showMore, setMore] = useState('');

    const toggle = () => setMore(!showMore);

    const weather = useWeather();
    const showWeek = useWeekweather();
    
  /*  useEffect(() => {
        async function getData() {
            const res = await axios.get('http://localhost:4000/')
            setWeather(res.data)
            console.log(res.data)
            
        }
        getData()
    }) */
    
    let data = Object.keys(weather).map((key) =>{
        console.log("weather location", weather[key]);
             return weather[key]
    })

    let weekdata = Object.keys(showWeek).map((key) =>{
        console.log("weather week", showWeek[key]);
        return showWeek[key]
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
                {showMore && <Weekweather data = {weekdata}/>}
                     
             </Card>
            
        </div>
    )
}
export default Box;