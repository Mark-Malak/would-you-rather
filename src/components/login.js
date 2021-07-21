import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './wur.png'; //

const useStyles = makeStyles({
    root: {
        margin: 'auto ',
        width: '30%',

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Login() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
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
                <option value="volvo">Mark</option>
                <option value="saab">Admin</option>
                <option value="mercedes">Normie</option>
            </select>
            <br />
            <Button className="sign-btn"  variant="outlined" color="#000000" size="big">Sign in </Button>
            </CardContent>
        </Card >
    );
}
