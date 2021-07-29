export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}


export function updateUserAnswer (answerObj) {
  return {
    type: UPDATE_USER_ANSWER,
    answerObj
  }
}

export function updateUserQuestions (question) {
  return {
    type: UPDATE_USER_QUESTIONS,
    question
  }
}
