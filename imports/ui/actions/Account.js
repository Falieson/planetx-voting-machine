export const ACCOUNT_USERNAME_UPDATE  = 'ACCOUNT_USERNAME_UPDATE';
export function updateAccountUsername(username) {
  return dispatch => {
    dispatch(updateUsername(username));
  }
}
function updateUsername(username) {
  return {
    type:       ACCOUNT_USERNAME_UPDATE,
    updatedAt:  Date.now(),
    username
  }
}

export const ACCOUNT_EMAIL_UPDATE  = 'ACCOUNT_EMAIL_UPDATE';
export function updateAccountEmail(email) {
  return dispatch => {
    dispatch(updateEmail(email));
  }
}
function updateEmail(email) {
  return {
    type:       ACCOUNT_EMAIL_UPDATE,
    updatedAt:  Date.now(),
    email
  }
}

export const ACCOUNT_PASSWORD_UPDATE  = 'ACCOUNT_PASSWORD_UPDATE';
export function updateAccountPassword(password) {
  return dispatch => {
    dispatch(updatePassword(password));
  }
}
function updatePassword(password) {
  return {
    type:       ACCOUNT_PASSWORD_UPDATE,
    updatedAt:  Date.now(),
    password
  }
}
