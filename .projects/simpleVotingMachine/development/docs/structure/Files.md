# NOTE
Basic structure supplied by [Meteor 1.3 Guide - App Structure (Link, 20160601)](http://guide.meteor.com/structure.html)

Final Structure based on collaboration with Stackoverflow and Gitter/meteor#meteor, many tutorials, and my previous repo [planetx-multiple-todos](https://github.com/Falieson/planetx-multiple-todos/).

[Updated 20160909](https://github.com/Falieson/planetx-multiple-todos/blob/5/extraCredit/task_expiration/docs/structure/Files.md) - Added Redux

```
/client/                        # client entry point, imports all client code
  main.html                    # react-root node, imports roboto for material
  main.jsx                     # imports ui
  main.css                     # global css, less, scss

/server/
  main.js                      # server entry point, imports startup/server/

/public/                        # Assets (images, fonts, sprites, etc.)

/packages/                      # private, refactor imports here by domain

/imports/
  App.jsx
  App.test.js

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
      subscriptions.js         # shared collections function
      getQuery.js              # shared views function
    candidates/                # a unit of domain logic
      server/
        fixtures.js            # enter some default data into the DB - good for testing API
        publications.js        # all Candidates-related publications
        publications.tests.js  # tests for the Candidates publications
      collections.js           # definition of the Candidates collection
      collectionHelpers.js     # Join/Transform goes here
      factories.js             # generate a default object of desired model
      helpers.js               # used by the api (methods, factories)
      methods.js               # methods related to Candidates
      methods.tests.js         # tests for those methods
      subscriptions.js         # all Candidates-related subscriptions
      subscriptions.tests.js   # tests for the Candidates subscriptions
      views.js                 # methods used in both pub&sub
      views.tests.js           # tests for pub-sub methods

  dev/                         # ReduxTools and other dev side only scripts

  ui/
    actions/                   # Redux actions - call to store & db
    components/                # Redux "dumb" components - managed by props
      candidatesList/          # split by domain
        List.jsx
        List.test.js
    containers/                # Redux containers - fetch db & dispatch actions
      CandidateList.jsx
    layouts/                   # wrapper components for behavior and visuals
      public/                  # split by domain (public, loggedIn, admin)
        Mouse/                 # default small/medium/large, simple mobile support
        Touch/                 # Mobile Layouts designed for Touch & limited KB
          Portrait/            # Portrait and Landscape Views
            Small/
            Medium/
          Landscape/
            Medium/
            Large/
    pages/                     # entry points for rendering used by the router
      Ballot.jsx
    reducers/                  # model the store
    store/                     # loads Redux DevTools dependent on environment

/.package.json                 # NPM packages
/.meteor/meteor_packages       # Meteor packages

/.gitignore                    # Anything defined here isn't uploaded to VCS

/.babelrc                      # JS/ES version for Webpack
/.eslintrc.js                  # Atom IDE: linter settings


/.projects/
  simpleVotingMachine/         # Project Management can be done locally
    development/               # Collaborator Documentation
      CommitJournal.md         # 1-Line commit logs, details here
    product/                   # Plan, Ideas, and Design

```
