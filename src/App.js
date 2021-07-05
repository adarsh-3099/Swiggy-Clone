import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login'
import Header from './Header'
import Homepage from './Homepage'
import Signup from './Signup'
import Order from './Order'

import { Provider } from 'react-redux'
import store from './store'


function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Switch>
          <Route path="/home">
            <Login />
          </Route>
          <Route path="/login">
            <Signup />
          </Route>
          <Route path="/cart">
            <Order />
          </Route>
          <Route path="/">
            <Header />
            <Homepage />
          </Route>
        </Switch>
        </div>
      </Router>
  </Provider>
  );
}

export default App;
