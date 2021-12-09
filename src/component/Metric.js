import React from 'react';

const Metric = (props) => {
   
    const handleDegree =(e) => {
        props.degree(e.target.value);
    }
    return (
        <div>
            <form>
                    <input
                        type="radio"
                        value="Farenheit"
                        name="metricRadios"
                        id="metricRadiosF"
                        onClick = {handleDegree}
                        defaultChecked
                    />F<br></br>
                    <input
                        type="radio"
                        value="Celcius"
                        name="metricRadios"
                        id="metricRadiosC"
                        onClick = {handleDegree}
                    />C<br></br>     
                </form>
        </div>
    )

}
export default Metric;