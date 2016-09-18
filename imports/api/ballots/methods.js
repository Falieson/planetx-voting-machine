const debug = false;

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
    candidateId:          {type: String },
    createdBy:            {type: String },
  }).validator(),
  run({
    candidateId,
    createdAt = Date.now(),
    createdBy
  }) {
    return Ballots.insert({
      candidateId,
      daysBeforeElection: daysBeforeElection(),
      createdAt,
      createdBy : this.userId,
    });
  }
});

export const updateBallot = new ValidatedMethod({
  name: 'ballots.update',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    candidateId:          {type: String },
  }).validator(),
  run({
    candidateId,
    updatedAt = Date.now()
  }) {
    return Ballots.update(
      {createdBy: this.userId},
      {
        $set: {
          candidateId,
          daysBeforeElection: daysBeforeElection(),
          updatedAt
        }
      }
    );
  }
});

Meteor.methods({
  'ballots.fetch': function(){
    if(Meteor.isServer){
      const result = Ballots.findOne({createdBy: this.userId});

      if(debug){
        console.log(`Ballots.fetch::> `, result);
      }

      return result;
    }
  }
});
