// ACCOUNT - UPDATE & SUBMIT
// # Update Account (Locally)
export const ACCOUNT_UPDATE_USERNAME          = 'ACCOUNT_UPDATE_USERNAME';
export const ACCOUNT_UPDATE_EMAIL             = 'ACCOUNT_UPDATE_EMAIL';
export const ACCOUNT_UPDATE_PASSWORD          = 'ACCOUNT_UPDATE_PASSWORD';

export function updateAccountUsername(username) {
  return dispatch => {
    dispatch( updateUsername(username) );
  }
}
function updateUsername(username) {
  return {
    type:       ACCOUNT_UPDATE_USERNAME,
    username,
    valid:      true,
    updatedAt:  Date.now(),
  }
}
export function updateAccountEmail(email) {
  return dispatch => {
    dispatch( updateEmail(email) );
  }
}
function updateEmail(email) {
  return {
    type:       ACCOUNT_UPDATE_EMAIL,
    email,
    valid:      true,
    updatedAt:  Date.now(),
  }
}
export function updateAccountPassword(password) {
  return dispatch => {
    dispatch( updatePassword(password) );
  }
}
function updatePassword(password) {
  return {
    type:       ACCOUNT_UPDATE_PASSWORD,
    password,
    valid:      true,
    updatedAt:  Date.now(),
  }
}

// Account Registration Form Fields Invalid
export const ACCOUNT_UPDATE_USERNAME_INVALID  = 'ACCOUNT_UPDATE_USERNAME_INVALID';
export const ACCOUNT_UPDATE_EMAIL_INVALID     = 'ACCOUNT_UPDATE_EMAIL_INVALID';
export const ACCOUNT_UPDATE_PASSWORD_INVALID  = 'ACCOUNT_UPDATE_PASSWORD_INVALID';
export function updateAccountUsernameInvalid() {
  return dispatch => {
    dispatch( invalidUsername() );
  }
}
function invalidUsername() {
  return {
    type:         ACCOUNT_UPDATE_USERNAME_INVALID,
    valid:        false,
    updatedAt:    Date.now(),
  }
}
export function updateAccountEmailInvalid() {
  return dispatch => {
    dispatch( invalidEmail() );
  }
}
function invalidEmail() {
  return {
    type:         ACCOUNT_UPDATE_EMAIL_INVALID,
    valid:        false,
    updatedAt:    Date.now(),
  }
}
export function updateAccountPasswordInvalid() {
  return dispatch => {
    dispatch( invalidPassword() );
  }
}
function invalidPassword() {
  return {
    type:         ACCOUNT_UPDATE_PASSWORD_INVALID,
    valid:        false,
    updatedAt:    Date.now(),
  }
}



// # Create Account (To DB - Remotely)
import {newAccount} from '../../api/accounts/methods.js';
import {submitBallotForCandidate}  from './Ballot.js';

export const ACCOUNT_CREATE_OPTIMIST  = 'ACCOUNT_CREATE_OPTIMIST';
export const ACCOUNT_CREATE_SUCCESS   = 'ACCOUNT_CREATE_SUCCESS';
export const ACCOUNT_CREATE_ERROR     = 'ACCOUNT_CREATE_ERROR';

export function submitVoterRegistrationThenBallot(user, candidateId) {
  return dispatch => {
    const {username, email, password} = user;
    dispatch( submitAccount(username) );

    newAccount.call({username, email, password}, (error, result) => {
      if(error) {
        let message = '';
        if(error.message && error.message.length > 0){
          message = error.message;
        }
        else {
          message = 'check error field';
        }
        dispatch( ErrorNewAccountNotSaved(error, message) );
      }
      else { //success
        dispatch( newAccountSaved(result) );

        // Server side account creation means explictely logging in on the client
        Meteor.loginWithPassword(username, password);

        dispatch( submitBallotForCandidate(candidateId, result) );
      }
    });
  }
}
function submitAccount(username) {
  return {
    type:                 ACCOUNT_CREATE_OPTIMIST,
    updatedAt:            Date.now(),
    username:             username,
    error:                {},
    errorMessage:         'contacting server to save...',
    savingOptimisticly:   true,
    saved:                false
  }
}
function newAccountSaved(userId) {
  return {
    type:                 ACCOUNT_CREATE_SUCCESS,
    updatedAt:            Date.now(),
    userId:               userId,
    password:             '',
    error:                {},
    errorMessage:         '',
    savingOptimisticly:   false,
    saved:                true
  }
}
function ErrorNewAccountNotSaved(error, errorMessage) {
  return {
    type:                 ACCOUNT_CREATE_ERROR,
    updatedAt:            Date.now(),
    error:                error,
    errorMessage:         errorMessage,
    savingOptimisticly:   false,
    saved:                false
  }
}
