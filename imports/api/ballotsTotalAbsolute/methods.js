import { BallotsTotalAbsolute } from './collections.js';
import { Candidates }         from '../candidates/collections.js';

export const incrBallotTotalAbsolute = new ValidatedMethod({
  name: 'ballotsTotalAbsolute.incr',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId }) {
    const candidate = Candidates.findOne(candidateId);
    return BallotsTotalAbsolute.update(
      {candidateId},
      {
        $set: {
          updatedAt:  Date.now(),
          lastName:   candidate.name.last,
        },
        $inc: {votes: 1}
      }
    );
  }
});

export const decrBallotTotalAbsolute = new ValidatedMethod({
  name: 'ballotsTotalAbsolute.decr',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId }) {
    const candidate = Candidates.findOne(candidateId);
    return BallotsTotalAbsolute.update(
      {candidateId},
      {
        $set: {
          updatedAt:  Date.now(),
          lastName:   candidate.name.last,
        },
        $inc: {votes: -1}
      }
    );
  }
});
