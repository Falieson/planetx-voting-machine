const debug = false;
/*
  functions exported from this file are used in
  *  methods.js
  *  server/publications.js
  *  *.tests.js
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';

import { Parties } from './collections.js';

const all = (filters)=> {
  if(debug || filters){
    console.log("ITEMVIEW: all");
  }

  if(filters){
    console.log("Where did filters come from?", filters);
  }

  if(Meteor.isClient){
    const results = Parties.find().fetch();
    return results;
  } else {
    const results= Parties.find();

    if(debug == 2){
      console.log(`Publishing All (${results.count()}) Parties: `, results.fetch());
    }

    return results;
  }
};

export const PartiesView = all;
