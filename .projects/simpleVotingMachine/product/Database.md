# CURRENT DATABASE
## Candidates
1. Candidates: Fixture Data

## Voters
1. VoterId
1. AccountId => RandomId() TODO: Next Commit w/ User Accounts
1. Ballot{} (latest version)
1. BallotIds[]

## Ballots
1. BallotId
1. VoterId
1. VoteForCandidate
1. Days Until 2016 Election
1. createdAt: Date.now()
1. updatedAt: false




# FINAL DATABASE
## Candidates
1. Candidates: Fixture Data

## Account
1. AccountId
1. Emails[]
1. ProfileId

## Profile
1. ProfileId
1. AccountId
1. PublicName
1. Info
  1. Short Bio
  1. Signature
1. Sessions[]
  1. SessionIds
  1. Domain
  1. Pages
    1. {Entrance Path, Timestamp}
    1. {Last Path, Timestamp}
    1. Pages[]
      1. Path-Url
      1. Title
      1. Time on Page
      1. Events[]
      1. Timestamp
  1. Stats
    1. TimeOnSite
    1. PagesAmount
  1. First Ballot Submitted (Bool)
  1. Daily Ballot Submitted (Bool)
  1. Ballot Updated         (Bool)
  1. Days Until Election    (Int)
1. Marketing
  1. First Visit From
  1. Last Visit From
  1. Most Visits From
  1. Stats
    1. Total  Visits
    1. Visits Per Day
    1. Visit  Acceleration
    1. InvitesSent



## Sessions
1. SessionId
1. Meta
  1. Location
  1. Day, LocalTime
  1. Weather
  1. Day Light Savings Active
1. Tech
  1. Internet Connection Type
  1. Internet Connection Speed
  1. Device
  1. Device Type
  1. Device OS
  1. Device Age
  1. Browser
  1. Browser YearMonth
  1. Browser Age


## Voters
1. VoterId
1. AccountId
1. Ballot{} (latest version)
1. BallotIds[]
1. Demographic
  1. Voter Age
  1. Voter Education
  1. Voter Income
  1. Voter Distance from 1Million+ City
  1. Voter Race
1. Identity
  1. Voter Political
  1. Voter Gender
  1. Voter Sex
    1. Voter Heritage


## Ballots
1. BallotId
1. SessionId
1. VoterId
1. VoteForCandidate
1. Days Until Election
1. Citizenship
  1. U.S. ?
  1. Other Country(s)?
  1. State, County, Zipcode
  1. Eligibility


## Total Ballots
Separate each report layer into its own collection since each DB.View() requires a DB.Fetch() - let's give collection access an opportunity to scale so if the majority of report requests are for TotalsAbsolute and TotalsDaily then they can get more processing nodes w/o affecting the allocation for TotalsWeekly.
VoterIds is an Array[] which means we want less than 1Million values per record. We don't use VoterIds at the Absolute level for this reason. Instead, the total vote is handled by a separate mechanism which limits one vote to voterId. On the other hand, Daily and Weekly are limited one vote per voterId at those levels at well. Since those levels won't break our VoterIds[].length constraint we will store them in the record.
Checking the vote count is necessary because MongoDB isn't ACID. This means that any given time any record might have additional changes pending to be made to it. Banks want ACID DBs because to keep an account going below the limit, they want all changes to the account to be finished before making a new one. What could happen with Check? Well, if we don't code our incrementation correctly there is the possibility that the count of Votes differs from the number of VoterIds. IF this ever happens we'll know there's something going wrong with our data assumptions.

1. BallotTotalsAbsolute
  1. TotalVotes:
  1. Check
    1. Sum of Votes
    1. Sum of Voter Ids

1. BallotTotalsDaily
  1. TotalVotes:
  1. Hourly
    1. VoterIds[]
    1. Votes:
  1. Check
    1. Sum of Votes
    1. Sum of Voter Ids

1. BallotTotalsWeekly
  1. TotalVotes:
  1. DailyIds:
    1. VoterIds[]
    1. Votes:
  1. Check
    1. Sum of Votes
    1. Sum of Voter Ids
