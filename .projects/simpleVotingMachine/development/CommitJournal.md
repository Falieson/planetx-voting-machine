# Simple Voting Machine
## 2. User Accounts
### 2.B)  Create Account in DB
##### 2.B.2) Create Account with Methods & Sign Ballot w/ UserId
Version: `0.0.1.4`

Commit: `{this}`

Branch: `votingMachine/simple/account`

Message: `SVM 2.B.2) Create New Account Meteor Method & update Ballot.CreatedBy`

Project:
* `Server side API for creating a user account`
* `Explicit login of successfully created user`
* `Attribute ballot to userId`

Issue:
`When completing last regForm field submitBallot/Button.jsx::ready toggles and removes focus from the field. There are other related symptoms where the UI is out-of-sync with the store, for example: `
- NewAccount.jsx::handleCompletedForm requires .length>1 but ready is only toggled when the last field is .length>2.
- similarly - removing all text should cause the button to disable, but it only disables after the text is removed, and then replaced with 1 character (b/c its not .length>1).
- finally, it seems that the entire voterRegister/Form.jsx component is reset (the state returns to default, fields are reset).
- FIXME: I'm preventing this problem from appearing to the user by overriding default values with props if they exist.

##### 2.B.1) New Account Info in Store
Version: `0.0.1.3`

Commit: `#1da35aa1`

Branch: `votingMachine/simple/account`

Message: `SVM 2.B.1) Redux for Store with New Account Info`

Project:
* `Redux for New Account, and Container and Component`
* `Added some styling to the form`

### 2.A) Account Registration UI & Dummy Header
##### 2.A.2) Animate render when Candidate Selected
Version: `0.0.1.2`

Commit: `#75422935`

Branch: `votingMachine/simple/account`

Message: `SVM 2.A.2) Animate render of Registration UI`

Project:
* `Updated RegForm from stateless component to react component`
* `Single child ReactTransitionGroup api, instead of ReactCSSTransitionGroup`

Notes:
* [Correct way of only rendering 0-1 child component](https://github.com/facebook/react/blob/master/docs/docs/10.1-animation.md)

##### 2.A.1) Form UI and Info
Version: `0.0.1.1`

Commit: `#98299a73`

Branch: `votingMachine/simple/account`

Message: `SVM 2.A.1) Create Dummy UI for Account Registration`

Project:
* `Dummy Form UI for Mobile Layout`
* `Call to Action: Registration Features`

Notes:
* `Using accounts-password package is after the UI is done`
* `CommitJournal.md now has versions, third-level and up represent versions and update the package.json`


## 1. MVP Voting Machine
### 1.D) Submit Ballot
##### 1.D.2) Save Ballot and Vote in Database
Version: `0.0.1`

Commit: `#28f82a18`

Branch: `voting_machine/simple`

Message: `SVM 1.D.2) Record vote and ballot submission in database`

Project:
* `Create Ballots Collection and View`
* `Create Ballots Fixtures Generator (tests methods and factory)`
* `Insert Ballot into the DB and update the Redux Store w/ Result`

Notes:
* `Securing ballot privacy, and Limiting ballot submissions is later`
* `Tallying ballot totals is for a later commit`
* `Updated documentation for releasing MVP - this completed branch`


##### 1.D.1) Redux: Handle Candidate Submit
Commit: `#f1f743a1`

Branch: `voting_machine/simple`

Message: `SVM 1.D.1) Save ballot submission in store and confirm DB save`

Project:
* `Save submitted ballot in the redux store`

Notes:
* `Could setup some UI responses for optimistic update and DbSave_failed but the UI might change by the final so going to skip it for now`


### 1.C) Select Candidate
##### 1.C.2) Redux: Select Candidate
Commit: `#98f9c7f2`

Branch: `voting_machine/simple`

Message: `SVM 1.C.2) Save selectedCandidate in store and render result`

Project:
* `Save selected candidate to the redux store`
* `Add findOne Candidate to Meteor/Mongo API`
* `Access store to display the candidates name in the CTA`


##### 1.C.1) Simple UI
Commit: `#3f1c5cef`

Branch: `voting_machine/simple`

Message: `SVM 1.C.1) Create UI to Submit Vote for Candidate`

Project:
* `Call to Action: Vote for Selected Candidate`

### 1.B) List of Candidates
##### 1.B.2) Redux: Fetch Candidates
Commit: `#4c823af1`

Branch: `voting_machine/simple`

Message: `SVM 1.B.2) Load Candidates from Store into UI`

Project:
* `Fixture generated DB data is now loaded into the UI`
* `Shuffle the list of candidates`

Notes:
* `Stein picture was updated`
* `Selecting a candidate not really missing from step 1.B.1, moved to 1.C.1`
* `Upgraded to Meteor 1.4.1`

##### 1.B.1) Simple UI
Commit: `#b3e26b62`

Branch: `voting_machine/simple`

Message: `SVM 1.B.1) Create UI for List of Candidates`

Project:
* `Candidates Material-UI Selectable List with Picture and Formal Name`

Notes:
* `More Work: Only dummy redux for fetching candidates list`
* `Missing:   Selecting a Candidate should redux`


### 1.A) Fixture Data for Top Candidates
Commit: `#3186cae3`

Branch: `voting_machine/simple`

Message: `Create insertCandidate method, Create fixtures for Candidates`

Project:
* `Candidates API Setup`
* `Candidates Method: Create New Record`
* `Candidates Factory`

Notes:
* `No UI yet. All the records exist in the db and the images are accessible on the web server`

References:
* [Planetx-Boilerplate by Falieson](https://github.com/Falieson/planetx-boilerplate)



# INIT #
commit: `#7f3ba6b4`

Message:  `empty structure, base framework and docs written`

Notes: ``
