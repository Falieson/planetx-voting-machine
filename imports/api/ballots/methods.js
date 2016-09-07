import { Meteor } from 'meteor/meteor';
import { Mongo }  from 'meteor/mongo';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Ballots }  from './collections.js';

import { daysBeforeElection } from '../../lib/settings.js';

export const insertBallot = new ValidatedMethod({
    name: 'ballots.insert',
    validate: new SimpleSchema({
      _id:                  {type: String, optional: true },
      voterId:              {type: String, optional: true },
      candidateId:          {type: String },
      createdBy:            {type: String },
  }).validator(),
  run({
    voterId,
    candidateId,
    createdAt = Date.now(),
    createdBy
  }) {
    return Ballots.insert({
      voterId,
      candidateId,
      daysBeforeElection: daysBeforeElection(),
      createdAt,
      createdBy
    });
  }
});
