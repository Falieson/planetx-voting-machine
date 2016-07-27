export const collectionsSubscribe = (title, filters, options)=> {
  if(Meteor.isClient){
    return Meteor.subscribe(title, filters, options);
  }
};
