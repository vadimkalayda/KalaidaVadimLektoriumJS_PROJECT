import React from 'react';
import './App.scss';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import LoginComponent from "./components/LoginComponent/LoginComponent";
import RegisterComponent from "./components/RegisterComponent/RegisterComponent";
import ResetPasswordComponent from "./components/ResetPasswordComponent/RestPasswordComponent";
import { AppBlock } from "./elements";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={ LoginComponent }/>
          <Route exact path='/register' component={ RegisterComponent }/>
          <Route exact path='/resetPass' component={ ResetPasswordComponent }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
