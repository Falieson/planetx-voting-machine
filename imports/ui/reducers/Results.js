import {
  RESULTS_DAILY_FETCH_SUCCESS, RESULTS_TOTAL_FETCH_SUCCESS
} from '../actions/Results.js';

export default function Results(state = {
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

    case RESULTS_TOTAL_FETCH_SUCCESS:
      return Object.assign({}, state, {
        items:              action.data,
        lastUpdated:        action.receivedAt,
        subscriptionReady:  true
      });

    default:
      return state;
  }
};
