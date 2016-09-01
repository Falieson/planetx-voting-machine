const debug = false;
/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';

import { Candidates } from './collections.js';

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

  const fields = {
    _id:    1,
    name:   1,
    image:  1,
  };


  if(Meteor.isClient){
    const results = Candidates.find(query, fields).fetch();

    if(debug){
      console.log(`Publishing Candidates: ${results.length}`);
    }

    return results;
  } else {
    const results= Candidates.find(query, fields);

    if(debug == 2){
      console.log(`Publishing All (${results.count()}) Candidates: `, results.fetch());
    }

    return results;
  }
};

export const CandidatesView = all;
