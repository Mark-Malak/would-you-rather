import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CreateQuestion from './components/CreateQuestion';
import Login from './components/Login';

import { Route } from 'react-router-dom'



class App extends React.Component {
 
 
 
  render() {
    return(
       <div className="App">
        <h3>Would you rather app </h3>
         <NavBar />
         <br/>
         <br/>  
         <Route path='/add' render={() => (
            <CreateQuestion/>
         )} />
         <Route exact path='/' render={() => (
            <Login/>
         )} />
         
         
     </div>
    )
  }
}

export default App;
