import { _saveQuestion , _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS ,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function answerQuestion () {
  return {
    type: ANSWER_QUESTION,
    
  }
}

export function handleAddQuestion (opt1, opt2) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    //dispatch(showLoading())
    
    const questionObj = { 
      optionOneText : opt1 ,
      optionTwoText : opt2 ,
       author: authedUser 
      } 
    return _saveQuestion( questionObj ).then( (formattedQuestion) => dispatch(addQuestion( formattedQuestion)) ).catch(err => console.log("opppppppsssssss"))
      //.then(() => dispatch(hideLoading()))
  }
}

export function handleSaveAnswer ( qId , Option ) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    //dispatch(showLoading())
    
    const answerObj = { 
      authedUser ,
      qid : qId ,
       answer: Option 
      } 
    return _saveQuestionAnswer( answerObj ).then( () => dispatch(answerQuestion()) ).catch(err => console.log("opppppppsssssss"))
      //.then(() => dispatch(hideLoading()))
  }
}