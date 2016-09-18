import { Meteor }           from 'meteor/meteor';
import { BallotsTotalAbsolute } from './collections.js';

export const incrBallotTotalAbsolute = new ValidatedMethod({
  name: 'ballotsTotalAbsolute.incr',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId }) {
    return BallotsTotalAbsolute.update(
      {candidateId},
      {
        $set: {updatedAt: Date.now()},
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
    return BallotsTotalAbsolute.update(
      {candidateId},
      {
        $set: {updatedAt: Date.now()},
        $inc: {votes: -1}
      }
    );
  }
});
