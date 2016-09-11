# NOTE
Basic structure supplied by [Meteor 1.3 Guide - App Structure (Link, 20160601)](http://guide.meteor.com/structure.html)

Final Structure based on collaboration with Stackoverflow and Gitter/meteor#meteor and many tutorials.
[Outline first written here](https://github.com/Falieson/planetx-multiple-todos/blob/master/docs/Structure.md)

```
client/                        # client entry point, imports all client code
  main.html                    # react-root node, imports roboto for material
  main.jsx                     # imports ui
  main.css                     # global css, less, scss
imports/
  startup/
    client/
      index.js                 # client entry point
      routes.js                # set up all routes in the app
    config/
      useraccounts.js          # configure login templates
    server/
      fixtures.js              # fill the DB with example data on startup
      index.js                 # server entry point like API
  api/
    api.js                     # client & server api calls like methods
    api-server.js              # server only api calls like publications
    helpers/                   # shared by multiple APIs
      subscriptions.js         
    candidates/                     # a unit of domain logic
      server/
        fixtures.js            # enter some default data into the DB - good for testing API
        publications.js        # all list-related publications
        publications.tests.js  # tests for the list publications
      collections.js           # definition of the Lists collection
      factories.js             # generate a default object of desired model
      collectionHelpers.js     # Join/Transform goes here
      methods.js               # methods related to lists
      methods.tests.js         # tests for those methods
      subscriptions.js         # all list-related subscriptions
      subscriptions.tests.js   # tests for the list subscriptions
      views.js                 # methods used in both pub&sub
      views.tests.js           # tests for pubsub methods
  ui/
    components/                # all reusable components in the application
      taskList/                # split by domain
        taskList.jsx
        taskList.test.js
    layouts/                   # wrapper components for behaviour and visuals
      TaskLists/               # split by domain
        Mouse/                 # default small/medium/large, simple mobile support
        Touch/                 # Mobile Layouts designed for Touch & limited KB
          Portrait/            # Portrait and Landscape Views
            Small/
            Medium/
          Landscape/
            Medium/
            Large/
    pages/                     # entry points for rendering used by the router
      List.jsx                
      Lists.test.js
    App.jsx
    App.test.js
packages/                      # private, move imports here by domain
server/
  main.js                      # server entry point, imports startup/server/

```
