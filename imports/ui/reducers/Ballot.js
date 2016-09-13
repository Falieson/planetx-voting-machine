import {
  BALLOT_UPDATE_CANDIDATE,
  BALLOT_SUBMIT_OPTIMIST, BALLOT_SUBMIT_SUCCESS, BALLOT_SUBMIT_ERROR
} from '../actions/Ballot.js';

export default function Ballot(state = {
  candidateId:        '',
  candidateName:      {},
  readyForSubmit: false,
  savingOptimisticly: false,
  saved:              false,
  error:              {},
  errorMessage:       '',
  lastUpdated:        false,
}, action) {
  switch (action.type) {
    case BALLOT_UPDATE_CANDIDATE:
      return Object.assign({}, state, {
        candidateId:          action.data._id,
        candidateName:        action.data.name,

        readyForSubmit:       action.submitReady
      });

    case BALLOT_SUBMIT_OPTIMIST:
      return Object.assign({}, state, {
        candidateId:          action.candidateId,

        savingOptimisticly:   action.savingOptimisticly,
        error:                action.error,
        errorMessage:         action.errorMessage,
        saved:                action.saved,
        lastUpdated:          action.updatedAt,
      });

    case BALLOT_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        candidateId:          action.data._id,
        candidateName:        action.data.name,

        savingOptimisticly:   action.savingOptimisticly,
        error:                action.error,
        errorMessage:         action.errorMessage,
        saved:                action.saved,
        lastUpdated:          action.updatedAt,
      });

    case BALLOT_SUBMIT_ERROR:
      return Object.assign({}, state, {

        savingOptimisticly:   action.savingOptimisticly,
        error:                action.error,
        errorMessage:         action.errorMessage,
        saved:                action.saved,
        lastUpdated:          action.updatedAt,
      });

    default:
      return state;
  }
};
