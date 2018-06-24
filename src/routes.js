import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Registration from './components/registration';
import HomePage from './components/homepage';
import Confirmation from './components/confirmation';
import Privacy from './components/privacy';
import ControlPanel from './components/controlpanel';
import Login from './components/login';



export default (

  <HashRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/registration" component={Registration} />
      <Route path="/confirmation" component={Confirmation}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/admin" component={ControlPanel}/>
      <Route path="/login" component={Login}/>
    </div>
  </HashRouter>
)