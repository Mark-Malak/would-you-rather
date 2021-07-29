import { getInitialData, getUsers } from '../utils/api'
import { receiveUsers, updateUserAnswer, updateUserQuestions } from './users'
import { receiveQuestions, answerQuestion, addQuestion } from './questions'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

//const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function handleUsersUpdate() {
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}

export function handleSaveAnswer(qId, Option) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    const answerObj = {
      authedUser,
      qid: qId,
      answer: Option
    }
    return _saveQuestionAnswer(answerObj).then(dispatch(answerQuestion(answerObj))).then(dispatch(updateUserAnswer(answerObj)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddQuestion(opt1, opt2) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    const questionObj = {
      optionOneText: opt1,
      optionTwoText: opt2,
      author: authedUser
    }
    return _saveQuestion(questionObj)
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion))
        dispatch(updateUserQuestions(formattedQuestion))
      }

      )
      .then(() => dispatch(hideLoading()))
  }
}
