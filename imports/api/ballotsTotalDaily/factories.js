import { Factory }  from 'meteor/dburles:factory';
import { Random }   from 'meteor/random';

import { selectRandomCandidate }  from '../candidates/helpers.js';
import { BallotsTotalDaily }      from './collections.js';

import { eurodate }               from '../../lib/date.js'

export default Factory.define('ballotTotalAbsolute', BallotsTotalDaily, {
  _day:         euroDate(),
  candidateId:  selectRandomCandidate()._id,
  votes:        0,
});
