import { combineReducers } from 'redux';

import Candidates   from './Candidates.js';
import Ballot       from './Ballot.js';
import Account      from './Account.js';
import ResultsDaily from './ResultsDaily.js';


const rootReducer = combineReducers({
  Candidates,
  Ballot,
  Account,
  ResultsDaily,
});

export default rootReducer;
