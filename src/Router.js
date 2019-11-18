import React from 'react';
import {Switch ,Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';

const Router = () =>(
    <Switch>
        <Route exact path = '/' component ={HomePage} ></Route>
        <Route exact path = '/cart' component ={CartPage} ></Route>
        
    </Switch>
)

export default Router;