# Goals
List of Candidates
Add a Candidate
Choose Top 3 Candidates (1-3 rank)
Choose Worst Candidate (1)
Save/Update Selected Votes
Sign with Alias or Public Name and Add Comment
Create Account with Login and Email Recovery to update later

# Plan
0. Setup and Plan
- Get a working base structure for Redux/Meteor
- Laydown the plan in this commit

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
  A) Account Registration and Header
  B) Associate Ballot with Account
  C) Account SignIn
  D) Ballot Update
  E) Secure Ballot so only this.userId() can access it

3. Tally Votes and Display Results
  A) Totals Collections
  B) Bar Graph Votes in “Today’s” Daily Battle
  C) Line Graph Votes cumulatively per day
  D) Router to Results Page, Signin/Login Page

4. Deploy to test server
  A) Choosing a Host: Digital Ocean
  B) MupX
  C) Setting up a Droplet
  D) DNS-Bind9, Nginx
  E) Link to Test Demo

5. Update 1-5 with Ranked Voting Algorithm
  A) Select Candidate
  - Ranked Selector and Veto UI: Show Position and Point Value
  - Mobile First
    : select position => select from list of candidates

  B) Submit Ballot
