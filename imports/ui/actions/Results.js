// RESULTS_DAILY - FETCH
import { BallotsTotalDailyView } from '../../api/ballotsTotalDaily/views.js';


export const RESULTS_DAILY_FETCH_SUCCESS = 'RESULTS_DAILY_FETCH_SUCCESS';

// # Deliver Candidates
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
