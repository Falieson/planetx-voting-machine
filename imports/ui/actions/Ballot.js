//# SUBSCRIBE TO CANDIDATES VIA METEOR MONGO API
import { CandidatesView } from '../../api/candidates/views.js';

export const BALLOT_UPDATE_CANDIDATE = 'BALLOT_UPDATE_CANDIDATE';

// ## Update Ballot
export function updateBallotForCandidate(candidateId) {
  return dispatch => {
    const Candidate =  CandidatesView.one(candidateId);
    dispatch(updateBallot(Candidate));
  }
}

function updateBallot(data) {
  return {
    type: BALLOT_UPDATE_CANDIDATE,
    data,
    updatedAt: Date.now(),
    submitReady: true
  }
}
