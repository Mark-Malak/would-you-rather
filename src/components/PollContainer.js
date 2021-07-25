
import React , { useState } from 'react';
import { Avatar, Button } from '@material-ui/core'
import { useLocation } from 'react-router'
import AnsweredPoll from './AnsweredPoll'
import{connect} from 'react-redux'
import { handleUsersUpdate } from '../actions/shared';
import Poll from './Poll';

const PollContainer = () => {
        const {answered , user , question} = useLocation().state
        const [chosed, setChosed] = useState(false);
        const [ans, setAns] = useState(answered);
    return (
        !ans ?  <Poll answered = {answered} user = {user} question = {question} /> : <AnsweredPoll user = {user}  question = {question} />
    )
}

export default PollContainer
