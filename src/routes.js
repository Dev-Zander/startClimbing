import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Registration from './components/registration';
import HomePage from './components/homepage';
import Confirmation from './components/confirmation';



export default (

  <HashRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/registration" component={Registration} />
      <Route path="/confirmation" component={Confirmation}/>
    </div>
  </HashRouter>
)