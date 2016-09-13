import {
  ACCOUNT_UPDATE_USERNAME, ACCOUNT_UPDATE_EMAIL, ACCOUNT_UPDATE_PASSWORD,
  ACCOUNT_FIELDS_VALID, ACCOUNT_FIELDS_NOT_VALID,
  ACCOUNT_CREATE_OPTIMIST, ACCOUNT_CREATE_SUCCESS, ACCOUNT_CREATE_ERROR,
} from '../actions/Account.js';

export default function Account(state = {
  username:           '',
  userId:             '',
  email:              '',
  password:           '',
  readyForSubmit: false,
  savingOptimisticly: false,
  saved:              false,
  error:              {},
  errorMessage:       '',
  lastUpdated:        false,
}, action) {
  switch (action.type) {
    case ACCOUNT_UPDATE_USERNAME:
      return Object.assign({}, state, {
        username:             action.username,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_UPDATE_EMAIL:
      return Object.assign({}, state, {
        email:                action.email,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password:             action.password,
        lastUpdated:          action.updatedAt,
      });


    case ACCOUNT_FIELDS_VALID:
      return Object.assign({}, state, {
        readyForSubmit:       action.submitReady,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_FIELDS_NOT_VALID:
      return Object.assign({}, state, {
        readyForSubmit:       action.submitReady,
        lastUpdated:          action.updatedAt,
      });


    case ACCOUNT_CREATE_OPTIMIST:
      return Object.assign({}, state, {
        username:             action.username,

        savingOptimisticly:   action.savingOptimisticly,
        error:                action.error,
        errorMessage:         action.errorMessage,
        saved:                action.saved,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_CREATE_SUCCESS:
      return Object.assign({}, state, {
        userId:               action.userId,

        savingOptimisticly:   action.savingOptimisticly,
        error:                action.error,
        errorMessage:         action.errorMessage,
        saved:                action.saved,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_CREATE_ERROR:
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
