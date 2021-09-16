import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Post from './Post';
import {Switch,Route,Router, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={App}/>
  <Route exact path="/post/:id" component={Post}/>
  </Switch>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

