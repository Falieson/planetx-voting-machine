# Goals
 - [x] List of Candidates
 - [x] Add a Candidate
 - [ ] Choose Top 3 Candidates (1-3 rank)
 - [ ] Choose Worst Candidate (1)
 - [x] Save/Update Selected Votes
 - [ ] Sign with Alias or Public Name and Add Comment
 - [x] Create Account with Login and Email Recovery to update later

# Plan
```
4. Ranked Voting - Core Update
  A) UI for Ranked Voting
  [x] Dummy Ranked Results Component
  [x] Grid Layout - Basic Responsive Design
  [-] Update Ballot Store: Ranked
  B) DB for Ranked Voting
  [-] Update Ballot DB: Ranked
  [-] Update Load Ballot from DB: Ranked
  [-] Update Results: Ranked

5. Deploy to test server
  A) Choosing a Host: Digital Ocean or Galaxy?
  B) MupX
  C) Setting up a Droplet
  D) DNS-Bind9, Nginx
  E) Link to Test Demo

6. Enhancements
  A) IP Address Limit (2)
  B) Handle Errors / Feedback
    - Account Create Errors
    - Account Login Errors
    - Login/Logout Success
    - Ballot Submit Success
    - Ballot Loaded Success
  C) Graphs
    - Line Graph Votes cumulatively per day
    - Line Graph Votes cumulative & up vs down per day
    - Total Votes Up vs Down & Total Voters Counter
  D) UI Tweaks

7. Optimizations
  A) DDP Rate Limit for the results pages and anything else that fetches from the DB
  B) Image Load
    - uniform face/body amount
    - similar file size (currently 150K-2MB!)
    - caching service?
  C) React-Inline Style/CSS put in LESS files and imported
  D) Add Transform/Joins to Meteor Methods
```

# Completed Plan
```
0. Setup and Plan
  A) Get a working base structure for Redux/Meteor
  B) Laydown the plan in this commit

1. Simple Voting Machine
  A) Fixture Data for Top Candidates
    - db records, schema, validation
    - fixtureImages
  B) List Candidates
    - Candidate Card: Image and Label
    - List of Candidates
  C) Select Candidate
    - Component: (**CTA**) Vote for Selected Candidate
    - Redux: HandleCandidateSelection
  D) Submit Ballot
    - Redux: HandleCandidateSubmission
    - DB: Save Ballot - Record Vote

2. Record and Update Vote with a User Account
  A) Registration Form UI and Header
    - UI for Registration and Form
    - Use transition to show UI when candidate is selected
  B) Create Account in DB
    - Put account info in Store
    - Register User && Associate Ballot with UserId
    - InfoSec: only this.userId can access ballot, remove password details from store on success
    - Validate Fields
  C) Returning Users
    - Router to Login Page
    - Account Login Form
    - Restore and Update Ballot

3. Tally Votes and Display Results
  A) Totals Collections
    [x] BallotTotalsAbsolute
    [x] BallotTotalsDaily
  B) Display Results
    [x] Bar Graph Votes in “Today’s” Daily Battle
    [x] Bar Graph Total Votes
    [ ] Line Graph Votes cumulatively per day

```

# Old Plan
```
3. Tally Votes and Display Results
  B) Display Results
    [x] Bar Graph Votes in “Today’s” Daily Battle
    [x] Bar Graph Total Votes
    [ ] Line Graph Votes cumulatively per day

4. Deploy to test server
  A) Choosing a Host: Digital Ocean or Galaxy?
  B) MupX
  C) Setting up a Droplet
  D) DNS-Bind9, Nginx
  E) Link to Test Demo

5. Update 1-4 with Ranked Voting Algorithm
  A) Select Candidate
  - Ranked Selector and Veto UI: Show Position and Point Value
  - Mobile First
    : select position => select from list of candidates
  B) Submit Ballot

7. Responsive Design Layouts (grid)
8. User Enhancements
  A) IP Address Limit (2)
  B) Handle Errors / Feedback
    - Account Create Errors
    - Account Login Errors
    - Login/Logout Success
    - Ballot Submit Success
    - Ballot Loaded Success
```
