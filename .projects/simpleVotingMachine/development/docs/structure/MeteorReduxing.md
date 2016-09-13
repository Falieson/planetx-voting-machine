# Structure
```
- client/main.jsx    for mounting React onto DOM root node

- imports/App.jsx*   for representing the root of the React tree

/imports/..
- ui/actions/        for communicating with the Store & API
- ui/components/     for modularizing the building of pages
- ui/containers/**   for presenting the results of actions, and dispatching
- ui/reducers/       for passing the result of actions to the store
- ui/store/          for holding the state tree, loads Redux dev tools
- ui/layouts/        for component availability, size, and HCI (tap vs gesture)
- ui/pages/          for containing each result of a route
```


> \* haven't setup react-router yet
>
> \*\* [Presentational Components - Redux Docs](http://redux.js.org/docs/basics/UsageWithReact.html)

# Store, State, Props
Many people learning Redux come across the idea that "store" and "state" are interchangeable and to that I say 'then why not just use one term'? Here's how I use and understand each.

- Store: Local, live version of the front-end, context is from FE's perspective
- State: Different options within a component, but 'mapStoreToProps' not 'mapStateToProps' b/c you are mapping the store.
- Props: Pass data TO a component, receive event responses FROM components

# MapStoreToProps, Component.PropTypes
- If the component has params then it should also do a component propTypes check
- Bringing data from the store into the component is done with MSTP, you don't propType check data that comes from MSTP


# Meteor React Libraries Tested
Tracker-Component - Simple & Small, no mixins, my only [issue is this.subscriptionsReady() is broke](https://github.com/studiointeract/tracker-component/issues/7).

### Don't Recommend
- react-komposer - Error: Tracker not found!
- DocumentContainer - Not compliant with my abstraction style for frontend work with API


# References
This is from my previous repo planetx-multiple-todos, [Updated this file on 20160909](https://github.com/Falieson/planetx-multiple-todos/blob/5/extraCredit/task_expiration/docs/structure/ReduxingMeteor.md)

Look there for original explanations, thoughts, and tutorial references.
