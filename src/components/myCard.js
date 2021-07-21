import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: 'auto ',
        width: '30%',
        padding: '10px'
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

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <h1>Create new Question</h1>
                <hr />
                <p align ="left">complete the question : </p>
                <h2 align ="left" >Would you rather...</h2>
                <input type = "text" size = "60" placeholder="Enter option once text here"></input>
                <h3>OR</h3>
                <input padding = "20px" line-height= "28px" type = "text" size = "60" placeholder="Enter option once text here"></input>
                <hr />
                <Button  variant="outlined" color="#000000" size = "big">Submit</Button>
            </CardContent>
        </Card>
    );
}
