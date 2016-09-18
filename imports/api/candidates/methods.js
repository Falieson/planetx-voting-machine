import { Meteor } from 'meteor/meteor';
import { Mongo }  from 'meteor/mongo';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Candidates }  from './collections.js';

import { getPartyColor } from './helpers.js';

const candidateNameSchema = new SimpleSchema({
  first:          {type: String },
  last:           {type: String },
  full:           {type: String },
  title:          {type: String, optional: true },
  titleShortened: {type: String, optional: true },
  formal:         {type: String, optional: true },
});
const candidatePartyColorSchema = new SimpleSchema({
  primary:    {type: String },
  secondary:  {type: String },
});
const candidatePartySchema = new SimpleSchema({
  memberOf:     {type: String },
  partyChoice:  {type: Boolean },
  colors:       {
    type: candidatePartyColorSchema
  },
});
const candidateLinksSchema = new SimpleSchema({
  wiki: {type: String, optional: true }
});

export const insertCandidate = new ValidatedMethod({
    name: 'candidates.insert',
    validate: new SimpleSchema({
      _id:    {type: String, optional: true },
      name:   {
        type: candidateNameSchema,
      },
      party:  {
        type: candidatePartySchema,
      },
      links:  {
        type: candidateLinksSchema,
      },
      image:      {type: String, optional: true },
      createdBy:  {type: String },
  }).validator(),
  run({ name, party, links, image, createdBy }) {

    return Candidates.insert({
      name,
      party,
      links,
      image,
      createdAt: Date.now(),
      createdBy
    });

  }
});
