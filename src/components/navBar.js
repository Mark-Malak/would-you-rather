import React from 'react';
import { AppBar, Tabs, Tab  ,Avatar} from '@material-ui/core/';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
class NavBar extends React.Component {

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
                            <Tab label="Logout" />
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
