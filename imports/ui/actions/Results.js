// RESULTS_DAILY - FETCH
import { BallotsTotalDailyView } from '../../api/ballotsTotalDaily/views.js';
export const RESULTS_DAILY_FETCH_SUCCESS = 'RESULTS_DAILY_FETCH_SUCCESS';

// # Deliver Daily Totals
export function fetchDailyResults() {
  return dispatch => {
    const Results = BallotsTotalDailyView.today();
    dispatch( receiveResultsDaily(Results) );
  }
}

function receiveResultsDaily(data) {
  return {
    type: RESULTS_DAILY_FETCH_SUCCESS,
    data,
    receivedAt: Date.now()
  }
}

import { BallotsTotalAbsoluteView } from '../../api/ballotsTotalAbsolute/views.js';
export const RESULTS_TOTAL_FETCH_SUCCESS = 'RESULTS_TOTAL_FETCH_SUCCESS';

// # Deliver Absolute Totals
export function fetchTotalResults() {
  return dispatch => {
    const Results = BallotsTotalAbsoluteView();
    dispatch( receiveResultsTotal(Results) );
  }
}

function receiveResultsTotal(data) {
  return {
    type: RESULTS_TOTAL_FETCH_SUCCESS,
    data,
    receivedAt: Date.now()
  }
}
