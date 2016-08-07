//# SUBSCRIBE TO TASK LISTS VIA METEOR MONGO API
import { CandidatesView } from '../../api/candidates/views.js';

export const CANDIDATES_FETCH_WAITING = 'CANDIDATES_FETCH_WAITING';
export const CANDIDATES_FETCH_SUCCESS = 'CANDIDATES_FETCH_SUCCESS';

// ## Deliver Task Lists
export function fetchTaskLists() {
  return dispatch => {
    const Lists = CandidatesView();

    dispatch(receiveTaskLists(Lists));
  }
}

function receiveTaskLists(data) {
  return {
    type: CANDIDATES_FETCH_SUCCESS,
    data,
    receivedAt: Date.now()
  }
}


// ## Waiting for Subscription
export function taskListSubscriptionPending() {
  return dispatch => {
    dispatch(waitingForTaskListSubscription());
  }
}

function waitingForTaskListSubscription() {
  return {
    type: CANDIDATES_FETCH_WAITING
  }
}
