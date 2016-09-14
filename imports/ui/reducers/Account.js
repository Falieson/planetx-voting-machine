import {
  ACCOUNT_UPDATE_USERNAME, ACCOUNT_UPDATE_EMAIL, ACCOUNT_UPDATE_PASSWORD,
  ACCOUNT_UPDATE_USERNAME_INVALID, ACCOUNT_UPDATE_EMAIL_INVALID, ACCOUNT_UPDATE_PASSWORD_INVALID,
  ACCOUNT_CREATE_OPTIMIST, ACCOUNT_CREATE_SUCCESS, ACCOUNT_CREATE_ERROR,
} from '../actions/Account.js';

export default function Account(state = {
  userId:             '',
  username:           '',
  usernameValid:      false,
  email:              '',
  emailValid:         false,
  password:           '',
  passwordValid:      false,
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
        usernameValid:        action.valid,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_UPDATE_EMAIL:
      return Object.assign({}, state, {
        email:                action.email,
        emailValid:           action.valid,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_UPDATE_PASSWORD:
      return Object.assign({}, state, {
        password:             action.password,
        passwordValid:        action.valid,
        lastUpdated:          action.updatedAt,
      });


    case ACCOUNT_UPDATE_USERNAME_INVALID:
      return Object.assign({}, state, {
        usernameValid:        action.valid,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_UPDATE_EMAIL_INVALID:
      return Object.assign({}, state, {
        emailValid:           action.valid,
        lastUpdated:          action.updatedAt,
      });
    case ACCOUNT_UPDATE_PASSWORD_INVALID:
      return Object.assign({}, state, {
        passwordValid:        action.valid,
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
        password:             action.password,

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
