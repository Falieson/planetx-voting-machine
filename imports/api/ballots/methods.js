const debug = false;

import { Meteor }           from 'meteor/meteor';
import { ValidatedMethod }  from 'meteor/mdg:validated-method';
import { SimpleSchema }     from 'meteor/aldeed:simple-schema';

import { Ballots }          from './collections.js';

import {
  incrBallotTotalAbsolute, decrBallotTotalAbsolute
} from '../ballotsTotalAbsolute/methods.js';

import {
  incrBallotTotalDaily, decrBallotTotalDaily
} from '../ballotsTotalDaily/methods.js';

import { daysBeforeElection } from '../../lib/settings.js';
import { eurodate }           from '../../lib/date.js'

const today = eurodate();

export const insertBallot = new ValidatedMethod({
  name: 'ballots.insert',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    candidateId:          {type: String },
    createdBy:            {type: String, optional: true },
  }).validator(),
  run({ candidateId, createdBy }) {
    incrBallotTotalAbsolute.call({candidateId});
    incrBallotTotalDaily.call({candidateId, _day: today});

    return Ballots.insert({
      candidateId,
      daysBeforeElection: daysBeforeElection(),
      createdAt:          Date.now(),
      createdBy:          this.userId,
    });
  }
});

export const updateBallot = new ValidatedMethod({
  name: 'ballots.update',
  validate: new SimpleSchema({
    _id:                  {type: String, optional: true },
    candidateId:          {type: String },
  }).validator(),
  run({ candidateId }) {
    const oldCandidateId = Ballots.findOne({createdBy: this.userId}).candidateId;
    decrBallotTotalAbsolute.call({candidateId: oldCandidateId});
    incrBallotTotalAbsolute.call({candidateId});
    
    decrBallotTotalDaily.call({candidateId: oldCandidateId, _day: today});
    incrBallotTotalDaily.call({candidateId, _day: today});

    return Ballots.update(
      {createdBy: this.userId},
      {
        $set: {
          candidateId,
          daysBeforeElection: daysBeforeElection(),
          updatedAt:          Date.now()
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
