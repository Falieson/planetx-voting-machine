import { combineReducers } from 'redux';
import Candidates from './Candidates.js';
import Ballot     from './Ballot.js';


const rootReducer = combineReducers({
  Candidates,
  Ballot
});

export default rootReducer;
