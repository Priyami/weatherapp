import React from 'react';
import { Card, Button, Form, InputGroup, Col } from 'react-bootstrap';
import "./Box.css";
import { FaSearchengin } from 'react-icons/fa';
import { useState, useEffect, useReducer, useRef } from 'react';
import background from "/src/images/Background.jpg";
import axios from 'axios';
import GetData from './GetData';
import Weekweather from './Weekweather';
import Listlocation from './Listlocation';
import Metric from './Metric';
import WErrorModal from './UI/WErrorModal';
import DegreeContext from './store/degree-context';

const initialState = { moreDetails: false, cityList: false };

const toggleReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MORE_DETAILS":
            return { moreDetails: !state.moreDetails };
        case "TOGGLE_LIST_ITEM":
            return { cityList: !state.cityList };
        default:
            throw new Error();
    }
}
const initState = { weatherData: [], listCity: [] };

const apiReducer = (state, action) => {
    switch (action.type) {
        case "DEFAULT_WEEK_WEATHER":
            return { ...state, weatherData: action.payload };
        case "SEARCH_WEATHER":
            return { ...state, weatherData: action.payload };
        case "LIST_CITY":
            return { ...state, listCity: action.payload };
    }

}
const Box = (props) => {
    const [toggleState, dispatchToggle] = useReducer(toggleReducer, initialState);
    const [showError, setError] = useState();
    const [city, setCity] = useState('boston');
    const [apiState, dispatchApi] = useReducer(apiReducer, initState);
    const [degree, setDegree] = useState('Farenheit');
    const inputRef = useRef('');


    const errorHandler = () => {
        setError(null);
    }
    const toggle = () => {
        dispatchToggle({ type: 'TOGGLE_MORE_DETAILS' })
    }

    const handleChange = (e) => {
        e.preventDefault();
        setCity(e.target.value);
    }

    //Three Days weather + Default Boston weather details onMount

    useEffect(() => {

        let mounted = true
        axios.post('https://weather-framework.herokuapp.com/api/week', { 'cityname': city })
            .then((res) => {
                if (mounted) {

                    dispatchApi({ type: 'DEFAULT_WEEK_WEATHER', payload: res.data })
                }
            })
            .catch(err => {

                console.log("Error in Request", err.res);
            });
        return () => mounted = false;



    }, [!city.trim().length < 3])

    const addCityHandler = () => {
        //Weather Data as per the Cityname in inputfield onclick search button Check validity
        var containsAlphabet = /^[0-9]+$/;

        console.log("city", city);
        if (city.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid city name (non-empty)'
            });

        }
        if (city.match(containsAlphabet)) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid city name (Alphabets only)'
            })

        }


        axios.post('https://weather-framework.herokuapp.com/api/week', { 'cityname': city })
            .then(res => {
                dispatchApi({ type: 'SEARCH_WEATHER', payload: res.data })
            })
            .catch(err => {
                console.log("Error in Request", err);

            });

    }

    const handleSpace = (e) => {
        if (e.keyCode == 13) {
            var containsAlphabet = /^[0-9]+$/;

            console.log("city enter key pressed", city);
            if (city.trim().length === 0) {
                setError({
                    title: 'Invalid Input',
                    message: 'Please enter valid city name (non-empty)'
                });

            }
            if (city.match(containsAlphabet)) {
                setError({
                    title: 'Invalid Input',
                    message: 'Please enter valid city name (Alphabets only)'
                })

            }

            axios.post('https://weather-framework.herokuapp.com/api/week', { 'cityname': city })
                .then(res => {
                    dispatchApi({ type: 'SEARCH_WEATHER', payload: res.data })
                })
                .catch(err => {
                    console.log("Error in Request", err);

                })


        }


        //List the cities when type on textbox       

        if (city.trim().length > 3) {
            dispatchToggle({ type: 'TOGGLE_LIST_ITEM' })
            axios.post('https://weather-framework.herokuapp.com/api/listdata', { 'city': city })
                .then(res => {
                    dispatchApi({ type: 'LIST_CITY', payload: res.data })
                })
                .catch(err => {
                    console.log("Error in response", err)
                })
        }
    };


    let jsonData = Object.keys(apiState.weatherData).map((key) => {
        return apiState.weatherData[key]
    })



    return (

        <div className="box" style={{ backgroundImage: `url(${background})` }}>
            <DegreeContext.Provider value={{
                degree: degree,
            }}>
                <Card style={{ width: '50rem' }} className="bg-dark text-white text-center">
                    <Card.Header>
                        <Form.Row>
                            <Form.Group as={Col} >
                                <InputGroup>

                                    <Form.Control
                                        ref={inputRef}
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
                        {toggleState.cityList && <Listlocation data={apiState.listCity} city={(city) => setCity(city)} activate={inputRef} ></Listlocation>}
                    </Card.Header>
                    {showError && <WErrorModal title={showError.title} message={showError.message} onConfirm={errorHandler} />}

                    <GetData data={jsonData}  ></GetData>
                    <Button variant="primary" onClick={toggle} >More Details</Button>
                    {toggleState.moreDetails && <Weekweather data={jsonData}></Weekweather>}

                </Card>
            </DegreeContext.Provider>

        </div >
    )
}
export default Box;









