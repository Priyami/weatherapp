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

//Default Weather Boston - Api from Node Server
const useWeather = () => {
    const [weather, setWeather] = useState([]);
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
    return weather
}


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

/*const useSearchdata = () => {
    const [showSearchData, setSearchData] = useState([]);


    useEffect(() => {
        let mounted = true
        
        axios.get('http://localhost:4000/search')
            .then((res) => {
                if (mounted) {
                    setSearchData(res.data)
                    console.log("searchdata",res.data)
                }
                
                return () => mounted = false;
                
            })
    }, [])
    return showSearchData

}*/

const Box = (props) => {
    const [showMore, setMore] = useState('');
    const [city, setCity] = useState('');
    const [showListcity, setListcity] = useState([]);
    const [showSearchData, setSearchData] = useState([]);


    const toggle = () => setMore(!showMore);

    const searchHandle = () => {
        
        axios.get('http://localhost:4000/search')
        .then(res => {
                setSearchData(res.data)
        })
        .catch(err => {
            console.log("Error in response", err)
        })
                   
    }

    const addCityHandler = city => {
        console.log(city, "in the Box");
        setCity(city);
        axios.post('http://localhost:4000/fullcity',{'fullcityname':city})
            .then(res => {
                 console.log("City value response", res.data);
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
            axios.post('http://localhost:4000/city',{'city':city})
            .then(res => {
                 console.log("City value response", res.data);
             })
             .catch(err => {
                 console.log("Error in Request", err);
 
             });
            axios.get('http://localhost:4000/listdata')
            .then(res => {
                    setListcity(res.data)
            })
            .catch(err => {
                console.log("Error in response", err)
            })
                
        }
      };
    
    
    const weather = useWeather();
    const showWeek = useWeekweather();
 
    
    let defaultdata = Object.keys(weather).map((key) =>{
        console.log("weather location", weather[key]);
             return weather[key]
    })

    let weekData = Object.keys(showWeek).map((key) =>{
        console.log("weather week", showWeek[key]);
        return showWeek[key]
    })
    let SearchData = Object.keys(showSearchData).map((key) =>{
        console.log("weather Search", showSearchData[key]);
        return showSearchData[key]
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
                                        <FaSearchengin onClick = {searchHandle} />

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
                     <Listlocation data = {showListcity} city = {addCityHandler}></Listlocation> 
                </Card.Header>
                
                <GetData data = {defaultdata} data = {SearchData}></GetData>
         

                <Button onClick={toggle} variant="primary">More Details</Button>
                {showMore && <Weekweather data = {weekData}/>}
                     
             </Card>
            
        </div>
    )
}
export default Box;