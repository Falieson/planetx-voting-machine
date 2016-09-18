import { Factory }  from 'meteor/dburles:factory';
import { Random }   from 'meteor/random';

import { selectRandomCandidate }  from '../candidates/helpers.js';
import { BallotsTotalAbsolute }   from './collections.js';

export default Factory.define('ballotTotalAbsolute', BallotsTotalAbsolute, {
  candidateId:  selectRandomCandidate()._id,
  votes:        0
});
