const debug = false;
/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { getQuery } from '../helpers/getQuery.js';
import { Candidates } from './collections.js';

const publicFields = {
  _id:    1,
  name:   1,
  image:  1,
};

const all = (filters)=> {
  if(debug || filters){
    console.log("ITEMVIEW: all");
  }

  if(filters){
    console.log("Where did filters come from?", filters);
  }

  const query = {
    _id:    {$ne: "init"}
  };

  if(Meteor.isClient){
    const results = Candidates.find(query, publicFields).fetch();

    if(debug){
      console.log(`Publishing Candidates: ${results.length}`);
    }

    return results;
  } else {
    const results= Candidates.find(query, publicFields);

    if(debug == 2){
      console.log(`Publishing All (${results.count()}) Candidates: `, results.fetch());
    }

    return results;
  }
};

const one = (target, filters) => {
  if(debug){
    console.log("ITEMVIEW: one");
  }

  const options = {_id: target};
  if(Meteor.isClient){
    const result = Candidates.findOne(options, publicFields);

    if(debug == 2){
      console.log(`Fetched Candidate[${target}]:  `, result);
    }

    return result;
  } else {
    return Candidates.find(options, publicFields);
  }
};

export const CandidatesView = {all, one};
