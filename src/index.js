import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {default as weath} from './weather';

ReactDOM.render(
    <Router>
    <Switch>
        <Route exact path="/" component={weath} />        
    </Switch>
    </Router>,
  document.getElementById('root')
);
