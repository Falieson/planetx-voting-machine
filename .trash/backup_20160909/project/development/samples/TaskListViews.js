/*
  functions exported from this file are used in
  *  methods
  *  server/publications
  *  tests
  *  ui/components
*/

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Lists } from './collections.js';
import { TaskItemViews } from '../taskItems/views.js';


const getQuery = (options)=> {
  let query = {
    _id: {$ne: "init"},
    $or: [
      { private: { $ne: true } },
      { owner: this && this.userId? this.userId : undefined },
    ],
  };

  if(typeof(options) === 'string'){
    query = {_id: options, ...query};
  } else {
    query = {...options, ...query};
  }

  // switch (filter) {
  //   case 'SHOW_ACTIVE':
  //     query.completed = false;
  //     break;
  //   case 'SHOW_ONE':
  //     query._id = options.listId;
  //     break;
  //   default:
  //     break; // no changes to query
  // }

  // console.log("QUERY 1-> ", query);

  return query;
}

const taskListFields = {_id: 1, title: 1};
const all = ()=> {
  if(Meteor.isClient){
    return Lists.find(getQuery(), taskListFields).fetch();
  } else {
    return Lists.find(getQuery(), taskListFields);
  }
};
const one = ( target) => {
  const options = {_id: target};
  if(Meteor.isClient){
    return Lists.findOne(getQuery( options), taskListFields);
  } else {
    return Lists.find(getQuery( options), taskListFields);
  }
};
const tasksFor = ( listId)=> {
  const options = {listId};
  if(Meteor.isClient){
    return TaskItemViews.find.select( options);
  } else {
    return Tasks.find({listId: listId});
  }
}

export const TaskListViews = {find: {all, one, tasksFor}};


// const queryType = (type, options)=> {
//   let query;
//   if(type =="all"){
//     query = {
//       _id: {$ne: "init"},
//       $or: [
//         { private: { $ne: true } },
//         { owner: this && this.userId? this.userId : undefined },
//       ],
//     };
//   } else if(type == "one") {
//     query = {
//       options,
//       $or: [
//         { private: { $ne: true } },
//         { owner: this && this.userId? this.userId : undefined },
//       ],
//     };
//   }
//
//   return query;
// };
