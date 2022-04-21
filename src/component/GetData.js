import React, { useContext, Fragment } from 'react';
import WCard from './UI/WCard';
import "./GetData.css";
import DegreeContext from './store/degree-context';
const GetData = (data) => {
    let combinedData = { ...data.data[0], ...data.data[1], ...data.data[2] }
    let condition = { ...combinedData.condition };
    const ctx = useContext(DegreeContext);
    return (
        <Fragment>
           
                <h4> Current Weather in {combinedData.name} </h4>
               
                    <div className="temperature">
                       
                            {(ctx.degree === 'Farenheit')
                                ?
                                <span>
                                    {combinedData.temp_f}
                                    <span>&#8457;</span>
                                </span>
                                :
                                <span>
                                    {combinedData.temp_c}
                                    <span>&#8451;</span>
                                </span>
                            }<img src={condition.icon} /> 
                        
                            <span>  {condition.text} </span>
                       
                </div>
                <span>Cloud:{combinedData.cloud}</span>
                <span>Humidity:{combinedData.humidity}</span>
                <span>Perciptition:{combinedData.precip_mm}</span>
                <span>{(ctx.degree === 'Farenheit') ? <div>Feelslike:{combinedData.feelslike_f}<span>&#8457;</span></div> : <div>Feelslike:{combinedData.feelslike_c} <span>&#8451;</span></div>}</span>
           
        </Fragment>
    )
}
export default GetData;