import {
  CANDIDATES_FETCH_WAITING,
  CANDIDATES_FETCH_SUCCESS,
} from '../actions/Candidates.js';

export default function Candidates(state = {
  items: [],
  subscriptionReady: false,
}, action) {
  switch (action.type) {
    case CANDIDATES_FETCH_WAITING:
      return Object.assign({}, state, {
        subscriptionReady: false
      });

    case CANDIDATES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        items: action.data,
        lastUpdated: action.receivedAt,
        subscriptionReady: true
      });

    default:
      return state;
  }
};
