import React from 'react';
import { Card, Button, Form, InputGroup, Col } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { useState, useEffect, useReducer } from 'react';
import background from "/src/images/Background.jpg";
import axios from 'axios';
import GetData from './GetData';
import Weekweather from './Weekweather';
import Listlocation from './Listlocation';
import Metric from './Metric';
import WErrorModal from './UI/WErrorModal';

const initialState = { details: false, list: false};

const toggleReducer = (state, action)=> {
  switch (action.type) {
    case "TOGGLE_MORE_DETAILS":
      return { details: !state.details};
    case "TOGGLE_LIST_ITEM":
      return { list: !state.list};
    default:
      throw new Error();
  }
}
const Box = (props) => {
    const [toggleState, dispatchToggle] = useReducer(toggleReducer, initialState);
    //const [showMore, setMore] = useState('');
    //const [showListItem, setListItem] = useState('');
    const [showError, setError] = useState();
    const [city, setCity] = useState('boston');
    const [showListcity, setListcity] = useState([]);
    const [showWeather, setWeather] = useState([]);
    const [showWeekWeather, setWeekWeather] = useState([]);
    const [degree, setDegree] = useState('Farenheit');

    const errorHandler = () => {
        setError(null);
    }
    const toggle = () => 
    {   
        
        dispatchToggle({type: 'TOGGLE_MORE_DETAILS'})

    }

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.id === "city") {
            setCity(e.target.value);
        }

    }

    //Three Days weather on More Details Click (Default Boston weather details onMount)

    useEffect(() => {
        let mounted = true

        axios.post('https://weather-framework.herokuapp.com/api/week', { 'cityname': city })
            .then((res) => {
                if (mounted) {
                    setWeekWeather(res.data)
                    console.log("week weather", res.data)
                }
                return () => mounted = false;
            })

    }, [])
    //Default Weather Boston - Api from Node Server

    useEffect(() => {
        let mounted = true

        axios.get('https://weather-framework.herokuapp.com/api')
            .then((result) => {
                if (mounted) {
                    setWeather(result.data)
                }

                return () => mounted = false;

            })
    }, [])
    const addCityHandler = () => {
        //Weather Data as per the Cityname in inputfield
        var containsAlphabet = /^[A-Za-z ,]+$/;
        console.log("city", city);
        if(city.trim().length === 0 )
        {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid city name (non-empty)'
            });
            
        }
        if(!city.match(containsAlphabet)){
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid city name (Alphabets only)'
            })
        }
        
        axios.post('https://weather-framework.herokuapp.com/api/fullcitysearch', { 'fullcityname': city })
            .then(res => {
                setWeather(res.data)

            })
            .catch(err => {
                console.log("Error in Request", err);

            });
        //Three Days weather on More Details Click      
        axios.post('https://weather-framework.herokuapp.com/api/week', { 'cityname': city })
            .then(res => {
                setWeekWeather(res.data)

            })
            .catch(err => {
                console.log("Error in Request", err);

            });

    }

    //List the cities when type on textbox       
    const handleSpace = (e) => {
        dispatchToggle({type: 'TOGGLE_LIST_ITEM'})


            axios.post('https://weather-framework.herokuapp.com/api/listdata', { 'city': city })
                .then(res => {
                    setListcity(res.data)
                })
                .catch(err => {
                    console.log("Error in response", err)
                })

       
    };


    let weekData = Object.keys(showWeekWeather).map((key) => {
        console.log("weather week", showWeekWeather[key]);
        return showWeekWeather[key]
    })
    let weatherData = Object.keys(showWeather).map((key) => {
        return showWeather[key]
    })


    return (

        <div className="box" style={{ backgroundImage: `url(${background})` }}>
            <Card style={{ width: '50rem' }} className="bg-dark text-white text-center">
                <Card.Header>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <InputGroup>
                               
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
                                 <InputGroup.Prepend onClick={addCityHandler} >
                                    <InputGroup.Text id="search-btn">
                                        <FaSearchengin />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                             </InputGroup>

                            
                        </Form.Group>
                        <Form.Group > <Metric degree={(degree) => setDegree(degree)} ></Metric></Form.Group>


                    </Form.Row>
                    {toggleState.list && <Listlocation data={showListcity} city={(city) => setCity(city)} ></Listlocation>}
                </Card.Header>
                {showError && <WErrorModal title= {showError.title} message={showError.message} onConfirm = {errorHandler}/>}

                <GetData data={weatherData} degree = {degree} ></GetData>
                <Button variant="primary" onClick={toggle} >More Details</Button>
                {toggleState.details && <Weekweather data={weekData}></Weekweather>}

            </Card>

        </div>
    )
}
export default Box;









