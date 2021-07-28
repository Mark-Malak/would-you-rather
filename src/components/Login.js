import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import logo from './wur.png'; //
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import {   withRouter } from 'react-router-dom'

const cardStyle = {
        margin: 'auto ',
        width: '30%'
    }

class Login extends React.Component{
   
    state = {
        selectValue: null
    }
    
    handleLogin(){
        console.log('logging.....' , this.state.selectValue)
        const{dispatch , history} = this.props
        dispatch( setAuthedUser(this.state.selectValue) )
        if(history.location.pathname === '/'){
             history.push(`/home`)
        }
       
       
        
        
    }


    handleChange(e){
        this.setState({ selectValue: e.target.value });
      }
    
render(){
    return (
        <Card style={cardStyle} variant="outlined">
            <CardContent>
                <div>
                <h3>Welcome to would you rather app !</h3>
                <h4>Please sign in to continue</h4>
                </div>

            <hr />
            <img alt="would you rather logo" width="180" height="120" src={logo} />
            <h3 >sign in </h3>

            <select value={this.state.selectValue ? this.state.selectValue : "" } 
                  onChange={this.handleChange.bind(this)} className="dropdown" name="users">
                <option value="" disabled >Select User </option>
                {
                   this.props.users && (this.props.usersID.map((id) => (
                             <option key = {id} value= {id} >{this.props.users[id].name}</option>
                        )) )
                }
            </select>
            <br />
            
                   <Button disabled = {this.state.selectValue === null } onClick ={this.handleLogin.bind(this)} className="sign-btn"  variant="outlined"  size="large">Sign in </Button>

            </CardContent>
        </Card >
    );}
}

function mapStateToProps({ users }) {
    return {
       usersID : Object.keys(users) ,
       users
    }
 }

 export default  withRouter( connect(mapStateToProps)(Login) ) ; 
