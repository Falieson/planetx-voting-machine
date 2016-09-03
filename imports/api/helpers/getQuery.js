// From Planet-X Multiple Todos, doesn't work out of the box yet
// export const getQuery = (filters, options, debug)=> {
//   let query = {
//     _id: {$ne: "init"},
//     $or: [
//       { private: { $ne: true } },
//       { owner: this && this.userId? this.userId : null },
//     ],
//   };
//
//   if(typeof(options) === 'string'){
//     query = {_id: options, ...query};
//   } else {
//     query = {...options, ...query};
//   }
//
//   switch (filters) {
//     case 'SHOW_ACTIVE':
//       query.completed = false;
//       break;
//     case 'SHOW_COMPLETED':
//       query.completed = true;
//       break;
//     case 'SHOW_ALL':
//       if(query.completed){
//         delete query.completed;
//       }
//     default:
//       break;
//   }
//
//   if(debug){
//     console.log("QUERY 0-> ", query);
//   }
//
//   return query;
// }
