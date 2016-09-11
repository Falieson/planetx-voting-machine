# Simple Voting Machine
### 2.A) Submit Ballot
Commit: `{this}`

Branch: `voting_machine/simple-account`

Message: `SVM 2.A) Register User, Associate Ballot with ID, Create Header`

Project:
* ``

Notes:
* ``

### 1.D) Submit Ballot
##### 1.D.2) Save Ballot and Vote in Database
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


##### 1.D.1) Redux: Handle Candidate Submit
Commit: `#c84285d5`

Branch: `voting_machine/simple`

Message: `SVM 1.D.1) Save ballot submission in store and confirm DB save`

Project:
* `Save submitted ballot in the redux store`

Notes:
* `Could setup some UI responses for optimistic update and DbSave_failed but the UI might change by the final so going to skip it for now`


### 1.C) Select Candidate
##### 1.C.2) Redux: Select Candidate
Commit: `#1ba47635`

Branch: `voting_machine/simple`

Message: `SVM 1.C.2) Save selectedCandidate in store and render result`

Project:
* `Save selected candidate to the redux store`
* `Add findOne Candidate to Meteor/Mongo API`
* `Access store to display the candidates name in the CTA`

Notes:
* ``


##### 1.C.1) Simple UI
Commit: `#fd8e7a82`

Branch: `voting_machine/simple`

Message: `SVM 1.C.1) Create UI to Submit Vote for Candidate`

Project:
* `Call to Action: Vote for Selected Candidate`

Notes:
* ``

### 1.B) List of Candidates
##### 1.B.2) Redux: Fetch Candidates
Commit: `#4abd2120`

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
Commit: `#a41681f7`

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
