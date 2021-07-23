import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core'; 
import Typography from '@material-ui/core/Typography';
import logo from './wur.png'; //
import { connect } from 'react-redux'

const cardStyle = {
        margin: 'auto ',
        width: '30%'
    }

class Login extends React.Component{
    
render()
    {return (
        <Card style={cardStyle} variant="outlined">
            <CardContent>
                <div>
                <h3>Welcome to would you rather app !</h3>
                <h4>Please sign in to continue</h4>
                </div>

            <hr />
            <img width="180" height="120" src={logo} />
            <h3 >sign in </h3>

            <select className="dropdown" name="users">
                <option value="" disabled selected>Select User </option>
                {
                   this.props.users && (this.props.usersID.map((id) => (
                             <option value= {id} >{this.props.users[id].name}</option>
                        )) )
                }
            </select>
            <br />
            <Button className="sign-btn"  variant="outlined" color="#000000" size="big">Sign in </Button>
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

 export default  connect(mapStateToProps)(Login) ; 