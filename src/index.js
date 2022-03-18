import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './component/store/history-context';
import {default as weath} from './weather';

ReactDOM.render(
   <Router>
        <Switch>
        <Provider store={store}> 
            <Route exact path="/" component={weath} /> 
        </Provider>    
        </Switch>
    </Router>,
  document.getElementById('root')
);
