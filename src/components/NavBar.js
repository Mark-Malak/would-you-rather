import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import styles from './mystyle.module.css';

class NavBar extends React.Component {

    state = {
        tabValue: 4
    }
    handleLogout() {
        console.log('logging out ....')
        const { dispatch } = this.props
        dispatch(setAuthedUser(null))
    }
    //refrences : https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_gray
    //https://stackoverflow.com/questions/23226888/horizontal-list-items-fit-to-100-with-even-spacing/23226961
    render() {
        return (
            <div className = {styles.navbar}>

                <ul  >
                    <li>
                        <Link to="/home"  style={{ textDecoration: 'none' }} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" style={{ textDecoration: 'none' }}>
                            New Question
                        </Link>
                    </li>
                    <li>
                        <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                            Leaderboard
                        </Link>
                    </li>
                    <li>
                        <p className = {styles.userName}>{this.props.user ? "Hello , Dear  " + this.props.user.name : ""} </p>
                    </li>
                    <li>
                        
                        {this.props.user ? <Link to="/" style={{ textDecoration: 'none' }} onClick={this.handleLogout.bind(this)} > Logout</Link>: ''}
                       
                    </li>
                </ul>


            </div>

        )
    }



}

function mapStateToProps({ users, authedUser }) {

    return {
        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(NavBar);
