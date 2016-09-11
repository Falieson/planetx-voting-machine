import {
  ACCOUNT_USERNAME_UPDATE, ACCOUNT_EMAIL_UPDATE, ACCOUNT_PASSWORD_UPDATE
} from '../actions/Account.js';

export default function Account(state = {
  username:           '',
  email:              '',
  Password:           '',
  readyForSubmission: false,
  error:              {},
  errorMessage:       '',
  lastUpdated:        false,
}, action) {
  switch (action.type) {
    case ACCOUNT_USERNAME_UPDATE:
      return Object.assign({}, state, {
        username:     action.username,
        lastUpdated:  action.updatedAt,
      });

    case ACCOUNT_EMAIL_UPDATE:
      return Object.assign({}, state, {
        email:        action.email,
        lastUpdated:  action.updatedAt,
      });

    case ACCOUNT_PASSWORD_UPDATE:
      return Object.assign({}, state, {
        password:     action.password,
        lastUpdated:  action.updatedAt,
      });

    default:
      return state;
  }
};
