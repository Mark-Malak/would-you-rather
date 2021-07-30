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

              <NavBar/>

            </div>
            <LoadingBar />
            <div className="main">
               <br />
               <br />

               {this.props.authedUser ?
                  <div>
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

                        <Route path="/questions/:question_id" component={Poll} />
                        <Route render={() => (
                           <div>
                              <h1>404 -Page Not Found! </h1>
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
                           <Login />
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
