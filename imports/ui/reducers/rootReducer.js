import { combineReducers } from 'redux';

import Candidates   from './Candidates.js';
import Ballot       from './Ballot.js';
import Account      from './Account.js';
import Results from './Results.js';


const rootReducer = combineReducers({
  Candidates,
  Ballot,
  Account,
  Results,
});

export default rootReducer;
