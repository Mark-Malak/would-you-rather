import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'redux-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer , middleware)
ReactDOM.render(
 
  <BrowserRouter>
  <Provider store = {store}>
     <App />
  </Provider>
     
  </BrowserRouter>
   , document.getElementById('root')
);


