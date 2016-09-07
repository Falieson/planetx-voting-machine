import { Factory }  from 'meteor/dburles:factory';
import { Random }   from 'meteor/random';

import { Ballots }       from './collections.js';

import { selectRandomCandidate }  from '../candidates/helpers.js';
import { daysBeforeElection }     from '../../lib/settings.js';


/* Ballot Factory
    BallotId
    VoterId
    VoteForCandidate
    Days Until 2016 Election
*/

export default Factory.define('ballot', Ballots, {
  voterId:            Random.id(),
  candidateId:        selectRandomCandidate()._id,
  daysBeforeElection: daysBeforeElection(),
  createdAt:          new Date(),
  createdBy:          'FIXTURE_GENERATOR',
});
