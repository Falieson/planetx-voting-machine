import {RESULTS_DAILY_FETCH_SUCCESS} from '../actions/Results.js';

export default function ResultsDaily(state = {
  items: [],
  subscriptionReady: false,
}, action) {
  switch (action.type) {
    case RESULTS_DAILY_FETCH_SUCCESS:
      return Object.assign({}, state, {
        items:              action.data,
        lastUpdated:        action.receivedAt,
        subscriptionReady:  true
      });

    default:
      return state;
  }
};
