import React from 'react';
import "./Box.css";
import { FaSearchengin, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect, useReducer, useRef, Fragment } from 'react';
import axios from 'axios';
import GetData from './GetData';
import Weekweather from './Weekweather';
import HistoryWeather from './HistoryWeather';
import Listlocation from './Listlocation';
import Metric from './Metric';
import WErrorModal from './UI/WErrorModal';
import DegreeContext from './store/degree-context';
import WCard from './UI/WCard';
import WButton from './UI/WButton';

const initialState = { moreDetails: false, cityList: false };

const toggleReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_MORE_DETAILS":
            return { ...state, moreDetails: !state.moreDetails };
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
const Box = React.memo((props) => {
    // var retrievedData = JSON.parse(localStorage.getItem('item'));
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
        <Fragment>
            <div className="box">
                <DegreeContext.Provider value={{
                    degree: degree,
                }}>
                    <WCard>
                        <div className='search-bar'>
                            <input
                                ref={inputRef}
                                size="60"
                                id="city"
                                label="city"
                                name="city"
                                value={city}
                                type="text"
                                placeholder="Search by city here.."
                                onChange={handleChange}
                                onKeyDown={handleSpace}
                                onClick={addCityHandler}
                            />
                            <span className='search-btn' onClick={addCityHandler}><FaSearchengin /></span>
                            <Metric degree={(degree) => setDegree(degree)} ></Metric>
                        </div>

                        {toggleState.cityList && <Listlocation data={apiState.listCity} city={(city) => setCity(city)} activate={inputRef} ></Listlocation>}

                        {showError && <WErrorModal title={showError.title} message={showError.message} onConfirm={errorHandler} />}

                        <GetData data={jsonData}></GetData>

                        <WButton onClick={toggle} >{toggleState.moreDetails ? <FaArrowDown /> : <FaArrowUp />} More Details {toggleState.moreDetails ? <FaArrowDown /> : <FaArrowUp />}</WButton>
                    </WCard>
                </DegreeContext.Provider>

            </div>
            <div className="box">
            <DegreeContext.Provider value={{ degree: degree, }}>
            {toggleState.moreDetails &&<WCard className="scroll">
             
                    {toggleState.moreDetails && <Weekweather data={jsonData}></Weekweather>}

                    {toggleState.moreDetails && <HistoryWeather data={jsonData}></HistoryWeather>}
            </WCard>}
            </DegreeContext.Provider>
            </div>
        </Fragment>
    )
})
export default Box;









