import React from 'react';

const Metric = (props) => {

    const handleDegree = (e) => {
        props.degree(e.target.value);
    }
    return (
        <div>
            <form>
            <label>
                <input
                    type="radio"
                    value="Farenheit"
                    name="metricRadios"
                    id="metricRadiosF"
                    onClick={handleDegree}
                    defaultChecked
                />F </label>
                <label>
                <input
                    type="radio"
                    value="Celcius"
                    name="metricRadios"
                    id="metricRadiosC"
                    onClick={handleDegree}
                />C</label>
            </form>
        </div>
    )

}
export default Metric;