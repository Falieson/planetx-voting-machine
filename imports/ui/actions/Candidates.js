// CANDIDATES - FETCH
import { CandidatesView } from '../../api/candidates/views.js';

export const CANDIDATES_FETCH_WAITING = 'CANDIDATES_FETCH_WAITING';
export const CANDIDATES_FETCH_SUCCESS = 'CANDIDATES_FETCH_SUCCESS';

// # Deliver Candidates
export function fetchCandidates() {
  return dispatch => {
    const Candidates = CandidatesView.all();

    dispatch(receiveCandidates(Candidates));
  }
}

function receiveCandidates(data) {
  return {
    type: CANDIDATES_FETCH_SUCCESS,
    data,
    receivedAt: Date.now()
  }
}


// ## Waiting for Subscription
export function subscriptionForCandidatesPending() {
  return dispatch => {
    dispatch(waitingForCandidatesSubscription());
  }
}

function waitingForCandidatesSubscription() {
  return {
    type: CANDIDATES_FETCH_WAITING
  }
}
