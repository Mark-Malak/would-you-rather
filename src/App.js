import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CreateQuestion from './components/CreateQuestion';
import QuestionList from './components/QuestionList';
import Login from './components/Login';
import { Route, useLocation } from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Poll from './components/Poll'
import PollContainer from './components/PollContainer';


class App extends React.Component {

   componentDidMount() {
      this.props.dispatch(handleInitialData())
   }
   // componentDidUpdate(prevProps , prevState){
   //    console.log("somth changed reupdaaaaaaaaaaaaaaaaaaaaaaating")
   //    if (prevState != null && prevState.questions !== this.state.questions) {
   //       this.props.dispatch(handleInitialData())
   //     }
   // }

   render() {

      return (
         <div className="App">
            <div className="fixed">
               <div>
                  <h4 style={{ margin: '0' }}>Would you rather app </h4>
               </div>

               <NavBar />
            </div>
            <div className="main">
               <br />
               <br />
               <Route path='/add' render={() => (
                  <CreateQuestion />
               )} />
               <Route exact path='/' render={() => (
                  <Login />
               )} />
               <Route exact path='/home' render={() => (
                  <div>
                     {this.props.loading === true
                        ? null
                        : <QuestionList />}
                  </div>
               )} />
               <Route exact path='/leaderboard' render={() => (
                  <LeaderBoard />
               )} />

               <Route path="/question/:qID"  component ={Poll} />

            </div>


         </div>
      )
   }
}

function mapStateToProps({ users, authedUser }) {
   return {
      loading: authedUser === null,
      user: users[authedUser]
   }
}

export default connect(mapStateToProps)(App)
