# Asynch Data Fetch from Server to Client

File: `/imports/ui/actions/Ballot.js`

Originally we were able to get our Ballot from the miniMongoDb localStorage with the pub/sub system but its not fast enough for us to **dependably**  retrieve the record **immediately** in the response of the insertion.

## Bad Way: setTimeout
Have to put a little delay on this response because we didn't use Meteor's client db (miniMongoDb/synced-via-ddp) so our local db needs a micron to syncup again
```js
setTimeout(()=>{
  // Subscription to Ballot associated with this.userId()
  let Ballot = BallotsView.mine();
  // console.log(`NEW_BALLOT[${result}]: `, Ballot);

  // Fetch the Candidate's name from the database
  const Candidate = CandidatesView.one(Ballot.candidateId);
  Ballot.name = Candidate.name;

  dispatch(ballotSaved(Ballot));
}, 50);
```

## Correct Way: Meteor.call()
So instead we create a simple method with  `Meteor.methods()` and use `Meteor.call()` to get an asynch response from the server. This means we don't wait for pub/sub to deliver the ballot at all for this operation.
