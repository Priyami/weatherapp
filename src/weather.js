import React, { Component } from 'react';
import './weather.css';
import Box from './component/Box';

class weather extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <div>
                         <h1 className="title">Weather</h1>
                    </div>

                    <div>
                        <Box />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default (weather);