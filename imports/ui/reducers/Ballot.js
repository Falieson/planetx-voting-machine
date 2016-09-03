import {
  BALLOT_UPDATE_CANDIDATE,
  BALLOT_SUBMIT_OPTIMIST, BALLOT_SUBMIT_SUCCESS, BALLOT_SUBMIT_ERROR
} from '../actions/Ballot.js';

export default function Ballot(state = {
  candidateId:        '',
  candidateName:      {},
  lastUpdated:        false,
  readyForSubmission: false,
  savingOptimisticly: false,
  saved:              false,
  errorMessage:       '',

}, action) {
  const BALLOT_SUBMIT_FIELDS = {
    savingOptimisticly:   action.savingOptimisticly,
    errorMessage:         action.errorMessage,
    saved:                action.saved,
    lastUpdated:          action.updatedAt,
  };

  switch (action.type) {
    case BALLOT_UPDATE_CANDIDATE:
      return Object.assign({}, state, {
        candidateId:          action.data._id,
        candidateName:        action.data.name,

        readyForSubmission:   action.submitReady
      });

    case BALLOT_SUBMIT_OPTIMIST:
      return Object.assign({}, state, {
        candidateId:          action.candidateId,
        BALLOT_SUBMIT_FIELDS
      });

    case BALLOT_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        candidateId:          action.data._id,
        candidateName:        action.data.name,
        BALLOT_SUBMIT_FIELDS
      });

    case BALLOT_SUBMIT_ERROR:
      return Object.assign({}, state, {
        BALLOT_SUBMIT_FIELDS
      });

    default:
      return state;
  }
};