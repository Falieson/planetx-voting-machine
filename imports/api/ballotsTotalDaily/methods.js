import { Meteor }             from 'meteor/meteor';
import { BallotsTotalDaily }  from './collections.js';

export const incrBallotTotalDaily = new ValidatedMethod({
  name: 'ballotsTotalDaily.incr',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    _day:                 {type: String },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId, _day }) {
    return BallotsTotalDaily.update(
      {candidateId, _day},
      {
        $set: {
          candidateId,
           _day,
          updatedAt:    Date.now()
        },
        $inc: {votes: 1}
      },
      {upsert: true}
    );
  }
});

export const decrBallotTotalDaily = new ValidatedMethod({
  name: 'ballotsTotalDaily.decr',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    _day:                 {type: String },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId, _day }) {
    return BallotsTotalDaily.update(
      {candidateId, _day},
      {
        $set: {
          candidateId,
           _day,
          updatedAt:    Date.now()
        },
        $inc: {votes: -1},
      },
      {upsert: true}
    );
  }
});
