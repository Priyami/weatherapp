import React, { useContext, Fragment } from 'react';
import Hourlyweather from './Hourlyweather';
import DegreeContext from './store/degree-context';
import moment from 'moment';
import WCard from './UI/WCard';
import "./Weekweather.css";

const Weekweather = (props) => {
    var combinedData = { ...props.data[0], ...props.data[1], ...props.data[2] }
    var forecast = combinedData.forecastday;
    const ctx = useContext(DegreeContext);
    function dayDate(date) {
        return new moment(date).format('ddd')
    }
    
    return (
        <Fragment>
            <br/>
            <span>Hourly</span>
            {<Hourlyweather data={props.data}></Hourlyweather>}
            <br/>
            <span>Three Day's Weather</span>
            <br/>
            <WCard>
                <table >
                    <tbody>
                        <tr>
                            {forecast.map((forecast, id) => (
                                <td key={id} className='table-border' >
                                    <table>
                                        <tbody>
                                            <tr><td>{dayDate(forecast.date)}</td></tr>
                                            <tr><td>{forecast.day.condition.text}</td></tr>
                                            <tr><td>{(ctx.degree === 'Farenheit')
                                                ?
                                                <div>
                                                    {forecast.day.avgtemp_f}
                                                    <span>&#8457;</span>
                                                </div>
                                                :
                                                <div>
                                                    {forecast.day.avgtemp_c}
                                                    <span>&#8451;</span>
                                                </div>
                                            }</td></tr>
                                            <tr><td><img src={forecast.day.condition.icon} /></td></tr>
                                        </tbody>
                                    </table>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </WCard>
        </Fragment>

    )
}
export default Weekweather;