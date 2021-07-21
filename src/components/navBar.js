import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core/';
import { Link } from 'react-router-dom'
class NavBar extends React.Component {

    render() {
        return (
            <div>

                <AppBar color="#FFFFFF" position="static">
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
                        <Tab color ="#000000" disabled label="Hello , dear potato" />
                        <Link to = "/" >
                            <Tab label="Logout" />
                        </Link>
                    </Tabs>
                </AppBar>
            </div>

        )
    }



}

export default NavBar;
