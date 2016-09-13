// BALLOT - UPDATE & SUBMIT
// # Update Ballot (Locally)
import { CandidatesView } from '../../api/candidates/views.js';

export const BALLOT_UPDATE_CANDIDATE  = 'BALLOT_UPDATE_CANDIDATE';
export function updateBallotForCandidate(candidateId) {
  // TIP: an exported function is longer and more specific in name and variables than the children functions the exported function calls locally in file. this is b/c of context.

  return dispatch => {
    const Candidate = CandidatesView.one(candidateId);

    // NOTE: you could try to catch a failure here! but since candidateId is sourced from mongoDb, retrieved in ./Candidates.js we can be very certain that the candidate exists based on the candidateId and is available in localStorage/miniMongoDb.

    dispatch(updateBallot(Candidate));
  }
}

function updateBallot(data) {
  return {
    type:       BALLOT_UPDATE_CANDIDATE,
    updatedAt:  Date.now(),
    data,
    submitReady: true
  }
}


// # Submit Ballot (To DB - Remotely)
// First, Create Account
// 2 step submission - optimistic, and confirmation
import { Meteor } from 'meteor/meteor';

import submitInfoForNewAccount from './Account.js';
import { Ballots }      from '../../api/ballots/collections.js';
import { BallotsView }  from '../../api/ballots/views.js';
import { insertBallot } from '../../api/ballots/methods.js';

export const BALLOT_SUBMIT_OPTIMIST   = 'BALLOT_SUBMIT_OPTIMIST';
export const BALLOT_SUBMIT_SUCCESS    = 'BALLOT_SUBMIT_SUCCESS';
export const BALLOT_SUBMIT_ERROR      = 'BALLOT_SUBMIT_ERROR';

export function submitBallotForCandidate(candidateId, userId) {
  return dispatch => {
    // II.A) Submit Ballot: Optimist
    dispatch(submitBallot(candidateId));

    // II.B) Submit Ballot: Account
    // Create this DB Fetch and Views in the next commit
    insertBallot.call({candidateId, createdBy: userId}, (error, result) => {
      if(error) {
        let message = '';
        if(error.message && error.message.length > 0){
          message = error.message;
        }
        else {
          message = 'check error field';
        }
        dispatch(ErrorBallotNotSaved(error, message));
      }
      else {
        // result is the new record's mongoDb id;

        // When result is available, subscription('ballot') will make the following code work but a secure meteor Fetch method would bypass the pub/sub system and deliver it directly wherever you want to assign it.
        let Ballot = BallotsView.one(result);

        // Fetch the Candidate's name from the database
        const Candidate = CandidatesView.one(Ballot.candidateId);
        Ballot.name = Candidate.name;

        dispatch(ballotSaved(Ballot));
      }
    });
  }
}
function submitBallot(id) {
  return {
    type:                 BALLOT_SUBMIT_OPTIMIST,
    updatedAt:            Date.now(),
    candidateId:          id,
    error:                {},
    errorMessage:         'contacting server to save...',
    savingOptimisticly:   true,
    saved:                false
  }
}

function ballotSaved(data) {
  return {
    type:                 BALLOT_SUBMIT_SUCCESS,
    updatedAt:            Date.now(),
    data:                 data,
    error:                {},
    errorMessage:         '',
    savingOptimisticly:   false,
    saved:                true
  }
}

function ErrorBallotNotSaved(error, errorMessage) {
  return {
    type:                 BALLOT_SUBMIT_ERROR,
    updatedAt:            Date.now(),
    error:                error,
    errorMessage:         errorMessage,
    savingOptimisticly:   false,
    saved:                false
  }
}
