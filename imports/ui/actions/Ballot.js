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
// 2 step submission - optimistic, and confirmation
// TODO: import { BallotsView }  from '../../api/ballots/views.js';
// TODO: import { insertBallot } from '../../api/ballots/methods.js';

export const BALLOT_SUBMIT_OPTIMIST   = 'BALLOT_SUBMIT_OPTIMIST';
export const BALLOT_SUBMIT_SUCCESS    = 'BALLOT_SUBMIT_SUCCESS';
export const BALLOT_SUBMIT_ERROR      = 'BALLOT_SUBMIT_ERROR';

export function submitBallotForCandidate(candidateId) {
  return dispatch => {
    // 1) Optimist
    dispatch(submitBallot(candidateId));

    // 2) Actual
    // Create this DB Fetch and Views in the next commit
    //   for now the insert should dummy-fail
    const err = 'dummy fail: no api connections yet';
    dispatch(ErrorBallotNotSaved(err));

    // insertBallot.call({candidateId}, (err, res) => {
    //   if(res) {
    //     const Ballot = Ballots.one(res);
    //     dispatch(ballotSaved(Ballot));
    //   }
    //   else {
    //     dispatch(ErrorBallotNotSaved(err));
    //   }
    // });

  }
}

function submitBallot(id) {
  return {
    type:                 BALLOT_SUBMIT_OPTIMIST,
    updatedAt:            Date.now(),
    candidateId:          id,
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
    errorMessage:         '',
    savingOptimisticly:   false,
    saved:                true
  }
}

function ErrorBallotNotSaved(error) {
  return {
    type:                 BALLOT_SUBMIT_ERROR,
    updatedAt:            Date.now(),
    errorMessage:         error,
    savingOptimisticly:   false,
    saved:                false
  }
}
