import React, { useContext, Fragment } from 'react';
import WCard from './UI/WCard';
import moment from 'moment';
import DegreeContext from './store/degree-context';
import styles from './HourlyWeather.module.css';
const Hourlyweather = (props) => {
    console.log("Hourly", props.data);
    let combinedData = { ...props.data[0], ...props.data[1], ...props.data[2] }
    let hourlyForecast = combinedData.forecastday[0].hour;
    const ctx = useContext(DegreeContext);
    function timeDate(date) {
        return new moment(date).format('hh:mm a')
    }
    return (
        <Fragment>
            <br/>
            <WCard className={styles.hourlyscrollbar}>
                <table >
                    <tbody>
                        <tr>
                            {hourlyForecast.map((forecast, id) => (
                                <td key={id} className={styles.border}>
                                    <table>
                                        <tbody>
                                            <tr><td>{timeDate(forecast.time)}</td></tr>
                                            <tr><td>{forecast.condition.text}</td></tr>
                                            <tr><td><img src={forecast.condition.icon} /></td></tr>
                                            <tr><td>{(ctx.degree === 'Farenheit')
                                                ?
                                                <div>
                                                    {forecast.temp_f}
                                                    <span>&#8457;</span>
                                                </div>
                                                :
                                                <div>
                                                    {forecast.temp_c}
                                                    <span>&#8451;</span>
                                                </div>
                                            }</td></tr>
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
export default Hourlyweather;