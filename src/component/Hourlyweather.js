import React from 'react';
import { Card, Table } from 'react-bootstrap';
import moment from 'moment';
import DegreeContext from './store/degree-context';
const Hourlyweather = (props) => {
    let combinedData = { ...props.data[0], ...props.data[1], ...props.data[2] }
    let hourlyForecast = combinedData.forecastday[0].hour;

    function timeDate(date) {
        return new moment(date).format('hh:mm a')
    }

    return (
        <DegreeContext.Consumer>
            {(ctx) => {
                return (
                    <div>
                        <Card className="bg-dark text-white text-center">

                            <Card.Body >
                                <Table variant="dark" responsive>
                                    <tbody>
                                        {hourlyForecast.map((forecast, id) => (
                                            <td key={id}>
                                                <td>
                                                    <tr>{timeDate(forecast.time)}</tr>
                                                    <tr>{forecast.condition.text}</tr>
                                                    <tr><img src={forecast.condition.icon} /></tr>
                                                    <tr>{(ctx.degree === 'Farenheit')
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
                                                    }</tr>
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
export default Hourlyweather;