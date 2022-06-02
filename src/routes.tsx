import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieInfo from './pages/MovieInfo';


export default function Routes() {
  return(
    <>
      <Switch>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/filme/:id' element={<MovieInfo />}></Route>
        <Route path="*" element=''></Route>
      </Switch>
    </>
  )
}