import React, { useContext, useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import DegreeContext from './store/degree-context';

import { useSelector, useDispatch } from "react-redux";


const HistoryWeather = (props) => {
    let item = useSelector((state) => state.historyItem);
    const dispatch = useDispatch();
    const combinedData = [{ ...props.data[0], ...props.data[1] }]

    useEffect(() => {
        combinedData.map(history => (
            item = [{
                cityName: history.name,
                text: history.condition.text,
                icon: history.condition.icon,
                temp_f: history.temp_f,
                temp_c: history.temp_c
            }]

        ))

        dispatch({ type: 'ADD', item: item });
    }, [dispatch])


    const ctx = useContext(DegreeContext);
    return (
        <div>
            <Card className="bg-dark text-white text-center">

                <Card.Body > History
                    <Table variant="dark" responsive>
                        <tbody>
                            {item.map((history, id) => (

                                <td key={id}>
                                    <td>
                                        <tr>{history.cityName}</tr>
                                        <tr>{history.text}</tr>
                                        <tr><img src={history.icon} /></tr>
                                        <tr>{(ctx.degree === 'Farenheit')
                                            ?

                                            <div>
                                                {history.temp_f}
                                                <span>&#8457;</span>
                                            </div>

                                            :
                                            <div>
                                                {history.temp_c}
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
}
export default HistoryWeather;