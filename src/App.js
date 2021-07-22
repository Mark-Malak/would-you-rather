import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CreateQuestion from './components/CreateQuestion';
import QuestionList from './components/QuestionList';
import Login from './components/Login';
import { Route } from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard';



class App extends React.Component {



   render() {
      return (
         <div className="App">
            <div className="fixed">
            <div>
                   <h4 style = {{margin:'0'}}>Would you rather app </h4>
            </div>
           
               <NavBar />
            </div>
            <div className = "main">
               <br />
               <br />
               <Route path='/add' render={() => (
                  <CreateQuestion />
               )} />
               <Route exact path='/' render={() => (
                  <Login />
               )} />
               <Route exact path='/home' render={() => (
                  <QuestionList />
               )} />
               <Route exact path='/leaderboard' render={() => (
                  <LeaderBoard />
               )} />

            </div>


         </div>
      )
   }
}

export default App;
