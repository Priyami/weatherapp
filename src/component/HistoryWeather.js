import React, { useContext, useEffect } from 'react';
import DegreeContext from './store/degree-context';
import WCard from './UI/WCard';
import './HistoryWeather.css';

import { useSelector, useDispatch } from "react-redux";
import { Fragment } from 'react';

const HistoryWeather = (props) => {
    const combinedData = [{ ...props.data[0], ...props.data[1] }]
    let item = useSelector((state) => state.historyItem);
    const dispatch = useDispatch();
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
        const timer = setTimeout(() => {
            dispatch({ type: 'DEL'});
            }, 30000);
            return () => clearTimeout(timer)
       
    }, [dispatch])
    const ctx = useContext(DegreeContext);
    return (      
        <Fragment>
             <br/>
            <span>Past Searches</span>
            <br/>
            <WCard className='historyscroll'>
                <table>
                    <tbody>
                        <tr>
                            {item.map((history, id) => (
                                <td key={id} className='table-border'>
                                    <table>
                                        <tbody>
                                            <tr><td>{history.cityName}</td></tr>
                                            <tr><td>{history.text}</td></tr>
                                            <tr><td><img src={history.icon} /></td></tr>
                                            <tr><td>{(ctx.degree === 'Farenheit')
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
export default HistoryWeather;