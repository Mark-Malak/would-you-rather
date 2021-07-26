import { getInitialData , getUsers} from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

//const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
       // dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}

export function handleUsersUpdate () {
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}

