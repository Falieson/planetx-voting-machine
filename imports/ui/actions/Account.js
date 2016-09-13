// ACCOUNT - UPDATE & SUBMIT
// # Update Account (Locally)
export const ACCOUNT_UPDATE_USERNAME  = 'ACCOUNT_UPDATE_USERNAME';
export const ACCOUNT_UPDATE_EMAIL     = 'ACCOUNT_UPDATE_EMAIL';
export const ACCOUNT_UPDATE_PASSWORD  = 'ACCOUNT_UPDATE_PASSWORD';

export function updateAccountUsername(username) {
  return dispatch => {
    dispatch( updateUsername(username) );
  }
}
function updateUsername(username) {
  return {
    type:       ACCOUNT_UPDATE_USERNAME,
    updatedAt:  Date.now(),
    username
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
    updatedAt:  Date.now(),
    email
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
    updatedAt:  Date.now(),
    password
  }
}

// Account Registration Form is Ready
export const ACCOUNT_FIELDS_VALID      = 'ACCOUNT_FIELDS_VALID';
export const ACCOUNT_FIELDS_NOT_VALID  = 'ACCOUNT_FIELDS_NOT_VALID';
export function updateAccountReadyForSubmit(password) {
  return dispatch => {
    dispatch( updateAccountReady() );
  }
}
function updateAccountReady() {
  return {
    type:       ACCOUNT_FIELDS_VALID,
    updatedAt:  Date.now(),
    submitReady: true
  }
}
export function updateAccountNotReadyForSubmit() {
  return dispatch => {
    dispatch( updateAccountNotReady() );
  }
}
function updateAccountNotReady(password) {
  return {
    type:       ACCOUNT_FIELDS_NOT_VALID,
    updatedAt:  Date.now(),
    submitReady: false
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
