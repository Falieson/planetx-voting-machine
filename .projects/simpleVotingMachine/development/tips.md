#  There is already a collection named ....
if you've hunted down that the collection is being called/declared twice though your code isn't doing it, the issue is probably a typo in your module 'from' statement

`import { BallotsTotalDailyView } from '../../api/BallotsTotalDaily/views.js';`
versus
`import { BallotsTotalDailyView } from '../../api/ballotsTotalDaily/views.js';`

this causes the builder to uniquely load the path each time because its case insensitive - it will find the module - but because the path is unique its viewed as a separate load.
