import React from 'react';
import { Card, Table } from 'react-bootstrap';
import Hourlyweather from './Hourlyweather';
import DegreeContext from './store/degree-context';
import moment from 'moment';
import "./Weekweather.css";

const Weekweather = (props) => {
    var combinedData = { ...props.data[0], ...props.data[1], ...props.data[2] }
    var forecast = combinedData.forecastday;
    function dayDate(date) {
        return new moment(date).format('ddd')
    }

    return (
        <DegreeContext.Consumer>
            {(ctx) => {
                return (
                    <div>
                        <Card className="bg-dark text-white text-center">

                            <Card.Body >
                                <span>Hourly</span>
                                <Hourlyweather data={props.data}></Hourlyweather>
                            </Card.Body>
                        </Card>
                        <Card className="bg-dark text-white text-center">

                            <Card.Body className="card-body-forecast" >
                                <Table variant="dark" responsive>
                                    <tbody>
                                        {forecast.map((forecast, id) => (
                                            <td key={id} >
                                                <td>
                                                    <tr>{dayDate(forecast.date)}</tr>
                                                    <tr>{forecast.day.condition.text} </tr>
                                                    <tr>{(ctx.degree === 'Farenheit')
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
                                                    }</tr>
                                                    <tr><img src={forecast.day.condition.icon} /></tr>
                                                </td>
                                            </td>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }}
        </DegreeContext.Consumer>
    )
}
export default Weekweather;