import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './component/store/history-context';
import Weather from './weather';


ReactDOM.render(
  <div>
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
    <Route path='/'>
          <Weather />
      </Route>
    </Switch>
    </BrowserRouter>
  </Provider>
  </div>,
  document.getElementById('root')
);
