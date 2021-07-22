export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveTweets (questions) {
  return {
    type: RECEIVE_QUESTIONS ,
    questions,
  }
}