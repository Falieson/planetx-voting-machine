# Goals
- List of Candidates
- Add a Candidate
- Choose Top 3 Candidates (1-3 rank)
- Choose Worst Candidate (1)
- Save/Update Selected Votes
- Sign with Alias or Public Name and Add Comment
- Create Account with Login and Email Recovery to update later

# Plan
```
3. Tally Votes and Display Results
  A) Totals Collections
    [x] BallotTotalsAbsolute
    [x] BallotTotalsDaily
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

```
