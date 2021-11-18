import React, { Component } from 'react';
import { Card, Button, Form, InputGroup, Col, CardGroup } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import background from "/src/images/Background.jpg";
import axios from 'axios';
import GetData from './GetData';
import Weekweather from './Weekweather';
import Listlocation from './Listlocation';



//Three Days weather on More Details Click
const useWeekweather = () => {
    const [showWeekweather, setWeekweather] = useState([]);

    useEffect(() => {
        let mounted = true
        
        axios.get('http://localhost:4000/week')
            .then((res) => {
                if (mounted) {
                    setWeekweather(res.data)
                    console.log("week weather",res.data)
                }
                
                return () => mounted = false;
                
            })
    }, [])
    return showWeekweather

}



const Box = (props) => {
    const [showMore, setMore] = useState('');
    const [city, setCity] = useState('');
    const [showListcity, setListcity] = useState([]);
    const [showWeather, setWeather] = useState([]);


    const toggle = () => setMore(!showMore);
   
    //Default Weather Boston - Api from Node Server

    useEffect(() => {
        let mounted = true
        
        axios.get('http://localhost:4000/')
            .then((result) => {
                if (mounted) {
                    setWeather(result.data)
                    console.log("current weather",result.data)
                }
                
                return () => mounted = false;
                
            })
    }, [])
    const addCityHandler = () => {
        
        axios.post('http://localhost:4000/fullcitysearch',{'fullcityname':city})
            .then(res => {
                 console.log("City value response", res.data);
                 setWeather(res.data)
                 
             })
             .catch(err => {
                 console.log("Error in Request", err);
 
             });
             
    }

    
    const handleChange =  (e) => {
        e.preventDefault();
           
            if (e.target.id === "city" ) {
                setCity(e.target.value);
            }       
            
    }     
                   
   //List the cities when type on textbox       
    const handleSpace= (e) => {
        if (e.keyCode === 32) 
        {
            axios.post('http://localhost:4000/listdata',{'city': city})
            .then(res => {
                    setListcity(res.data)
            })
            .catch(err => {
                console.log("Error in response", err)
            })
                
        }
      };
    
    
    const showWeek = useWeekweather();
 
    let weekData = Object.keys(showWeek).map((key) =>{
        console.log("weather week", showWeek[key]);
        return showWeek[key]
    })
    let weatherData = Object.keys(showWeather).map((key) =>{
        console.log("weather Data", showWeather[key]);
        return showWeather[key]
    })
    
    
   return (
    
        <div className="box" style={{ backgroundImage: `url(${background})` }}>
             <Card style={{ width: '50rem' }} className="bg-dark text-white text-center">
                 <Card.Header>
                     <Form.Row>
                         <Form.Group as={Col} >
                             <InputGroup>
                                 <InputGroup.Prepend >
                                     <InputGroup.Text>
                                        <FaSearchengin onClick = {addCityHandler} />

                                     </InputGroup.Text>
                                 </InputGroup.Prepend>
                                 <Form.Control
                                     id="city"
                                     label="city"
                                     name="city"
                                     value={city}
                                     type="text"
                                     placeholder="Search by city here.." 
                                     onChange={handleChange}
                                     onKeyDown={handleSpace}
                                     />
                             </InputGroup>
                         </Form.Group>
                         

                     </Form.Row>
                     <Listlocation data = {showListcity} city = {(city)=> setCity(city)}></Listlocation> 
                </Card.Header>
                
                <GetData data = {weatherData} ></GetData>
         

                <Button onClick={toggle} variant="primary">More Details</Button>
                {showMore && <Weekweather data = {weekData}/>}
                     
             </Card>
            
        </div>
    )
}
export default Box;