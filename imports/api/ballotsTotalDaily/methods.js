import { BallotsTotalDaily }  from './collections.js';
import { Candidates }         from '../candidates/collections.js';

export const incrBallotTotalDaily = new ValidatedMethod({
  name: 'ballotsTotalDaily.incr',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    _day:                 {type: String },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId, _day }) {
    const candidate = Candidates.findOne(candidateId);
    return BallotsTotalDaily.update(
      {candidateId, _day},
      {
        $set: {
          candidateId,
          _day,
          lastName:   candidate.name.last,
          updatedAt:  Date.now()
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
    const candidate = Candidates.findOne(candidateId);
    return BallotsTotalDaily.update(
      {candidateId, _day},
      {
        $set: {
          candidateId,
          _day,
          lastName:   candidate.name.last,
          updatedAt:  Date.now()
        },
        $inc: {votes: -1},
      },
      {upsert: true}
    );
  }
});
