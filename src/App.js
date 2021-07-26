import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import CreateQuestion from './components/CreateQuestion';
import QuestionList from './components/QuestionList';
import Login from './components/Login';
import { Route, Switch, Link } from 'react-router-dom'
import LeaderBoard from './components/LeaderBoard';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Poll from './components/Poll'
import PollContainer from './components/PollContainer';
import LoadingBar from 'react-redux-loading-bar'

class App extends React.Component {

   componentDidMount() {
      this.props.dispatch(handleInitialData())
   }


   render() {

      return (
         <div className="App">
            <div className="fixed">
               <div>
                  <h4 style={{ margin: '0' }}>Would you rather app </h4>
               </div>

               <NavBar />

            </div>
            <LoadingBar />
            <div className="main">
               <br />
               <br />

               {this.props.authedUser ? <div>
                  <Switch>
                     <Route path='/add' render={() => (
                        <CreateQuestion />
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

                     <Route path="/question/:question_id" component={Poll} />
                     <Route render={() => (
                        <div>
                           <h1>404 - Not Found! </h1>
                           <Link to="/home">
                              Back to home page
                           </Link>
                        </div>
                     )} />)
                  </Switch>
               </div> :
                  <div>
                     <Switch>
                        <Route exact path='/' render={() => (
                           <Login />
                        )} />
                        <Route render={() => (
                           <div>
                              <h1>404 - Access denied , sign in first! </h1>
                              <Link to="/">
                                 Back to sign in page
                              </Link>
                           </div>
                        )} />
                     </Switch>
                  </div>

               }

            </div>


         </div>
      )
   }
}

function mapStateToProps({ users, authedUser }) {
   return {
      loading: authedUser === null,
      user: users[authedUser],
      authedUser
   }
}

export default connect(mapStateToProps)(App)
