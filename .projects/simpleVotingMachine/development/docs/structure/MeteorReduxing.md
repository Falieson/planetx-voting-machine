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



# Meteor React Libraries Tested
Tracker-Component - Simple & Small, no mixins, my only [issue is this.subscriptionsReady() is broke](https://github.com/studiointeract/tracker-component/issues/7).

### Don't Recommend
- react-komposer - Error: Tracker not found!
- DocumentContainer - Not compliant with my abstraction style for frontend work with API


# References
This is from my previous repo planetx-multiple-todos, [Updated this file on 20160909](https://github.com/Falieson/planetx-multiple-todos/blob/5/extraCredit/task_expiration/docs/structure/ReduxingMeteor.md)

Look there for original explanations, thoughts, and tutorial references.
