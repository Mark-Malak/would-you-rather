import React from 'react';
import { AppBar, Tabs, Tab  ,Avatar} from '@material-ui/core/';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
class NavBar extends React.Component {


    handleLogout(){
        console.log('logging out ....')
        const{dispatch} = this.props
        dispatch( setAuthedUser(null) )
    }
    render() {
        return (
            <div>

                <AppBar  color="default" position="static">
                    <Tabs
                        variant="fullWidth"
                        aria-label="nav tabs example"
                    >
                    
                        <Link to = "/home" >
                            <Tab label="Home"></Tab>
                        </Link>

                        <Link to = "/add" >
                            <Tab label="New Question" />
                        </Link>
                        <Link to = "/leaderboard" >
                            <Tab label="Leaderboard" />
                        </Link>
                        
                             <Tab color ="#000000" disabled label= {this.props.user ? "Hello , Dear  " + this.props.user.name : ""} />
                            
                        
                       
                        <Link to = "/" >
                            {this.props.user ? <Tab onClick = {this.handleLogout.bind(this)} label="Logout" /> : ''}
                        </Link>
                    </Tabs>
                </AppBar>
            </div>

        )
    }



}

function mapStateToProps({ users , authedUser }) {

    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(NavBar);
