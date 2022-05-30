import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';


export default function Routes() {
  return(
    <>
      <Switch>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/' element=''></Route>
        <Route path='/' element=''></Route>
        <Route></Route>
      </Switch>
    </>
  )
}