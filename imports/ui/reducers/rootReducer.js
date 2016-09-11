import { combineReducers } from 'redux';

import Candidates   from './Candidates.js';
import Ballot       from './Ballot.js';
import Account      from './Account.js';


const rootReducer = combineReducers({
  Candidates,
  Ballot,
  Account,
});

export default rootReducer;
