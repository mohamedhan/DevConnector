import React, { Fragment,useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from './components/layout/Alert'
//Redux
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
      store.dispatch(loadUser());
  }, [])
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
       <Fragment>
        <Navbar />
        <Switch>
        <Route path exact='/' component={Landing} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        </Switch>
        <Alert />

      </Fragment>
      </Switch>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
