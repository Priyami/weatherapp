import React from 'react';
import { Card } from 'react-bootstrap';

const Metric = (props) => {

    return (
        <div>
            <Card.Body >
                <Card.Text>
                    <input
                        type="radio"
                        value="farenheit radio"
                        name="metricRadios"
                        id="farenheitRadios"
                    />
                    { }<label for="farenheit">Farenheit</label>

                </Card.Text>
                <Card.Text>
                    <input
                        type="radio"
                        value="celcius radio"
                        name="metricRadios"
                        id="celciusRadios"
                    />
                    { }<label for="celcius">Celcius</label>
                </Card.Text>
            </Card.Body>
        </div>
    )

}
export default Metric;