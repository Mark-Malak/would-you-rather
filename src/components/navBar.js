import React from 'react';
import { AppBar, Tabs  , Tab} from '@material-ui/core/';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <h2>Would you rather app </h2>
                <AppBar color = "#FFFFFF" position="static">
                    <Tabs
                        variant="fullWidth"
                        aria-label="nav tabs example"
                    >
                        <Tab label="Home" />
                        <Tab label="New Question" />
                        <Tab label="Leaderboard" />
                        <Tab color = "#000000" disabled label="Hello , dear potato" />
                        <Tab label="Logout" />
                    </Tabs>
                </AppBar>
            </div>

        )
    }



}

export default NavBar;
