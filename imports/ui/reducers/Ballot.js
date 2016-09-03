import {
  BALLOT_UPDATE_CANDIDATE,
} from '../actions/Ballot.js';

export default function Ballot(state = {
  candidateId: false,
  candidateName: {},
  lastUpdated: false,
  readyForSubmission: false,
}, action) {
  switch (action.type) {
    case BALLOT_UPDATE_CANDIDATE:
      return Object.assign({}, state, {
        candidateId: action.data._id,
        candidateName: action.data.name,
        lastUpdated: action.updatedAt,
        readyForSubmission: action.submitReady,
      });

    default:
      return state;
  }
};
