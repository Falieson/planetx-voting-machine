# PlanetX-Voting-Machine
A template for building large scale applications with Meteor and Redux. Learn how to use Meteor 1.4, React, Redux by stepping through the commits for this project. A tutorial and more information will be coming down the road.

## Goals
This repo is the result of a lot of my research, frustration, and effort to build a reusable modern (ES6+) template for large scale application development. My goals were to:

1. easily increase the # of contributors without EmberJS or another standards driven framework by having strong semantic naming conventions and consistent code formatting that's intuitive to read (thanks ES6 hoisting!)
1. DRY and Dissolve the app structure as much as possible so, as the application grows its a natural consequence to want to group components into independent modules, but prior to Meteor 1.3 a lot of code for each module was separated between /client/ and /server/. Now its easy (if programmed properly) to refactor completed modules from /imports/ into /packages/ making the next step - splitting into microservices - much easier.

## Audience
Intermediate to Advanced level MeteorJS or ReactJS developers. There's probably too much here, without enough documentation, for you to be a beginner in both and understand everything thats going on here.

## Getting Started
1. Clone and Install the App
1. Docs located in .projects/simpleVotingMachine/development
  1. CommitJournal - more info per commit
  1. Structure     - what files do and where they are
1. Turn on the server and Step through each of the commits

## Screenshot
![Screenshot](/.projects/simpleVotingMachine/product/screenshots/svm_epic-1-complete_20160907.png)

# Install Meteor & Install Application
```bash
$ curl https://install.meteor.com/ | sh
$ git clone https://github.com/Falieson/planetx-voting-machine.git
$ cd planetx-voting-machine
$ ln -s .projects/simpleVotingMachine .project && ln -s .meteor/packages meteor_packages && ls -lsa
$ meteor npm i -D
$ meteor
```

```bash
success will output fixture generation results...
GENERATING CANDIDATES: STARTED
GENERATING CANDIDATES: 8 Candidates
INSERTING CANDIDATES: STARTED
INSERTING CANDIDATES: COMPLETED
GENERATING BALLOTS: 10 Ballots
INSERTING TO DATABASE: STARTED
INSERTING TO DATABASE: COMPLETED
GENERATING BALLOTS & CLEANUP: SUCCESSFUL
```

#  Running the Application
- > **In your browser:**  http://localhost:3000
open up your browser's developer console and you will see redux logger in action

- > **after putting in a couple ballots (notice the order shuffles every page load)
confirm the ballots are saved to a db:** open up a new terminal, and go to the same directory
```bash
$ meteor mongo
$ db.ballots.find()
```
- > restart the meteor server if you want, the fixture generators know when to run
