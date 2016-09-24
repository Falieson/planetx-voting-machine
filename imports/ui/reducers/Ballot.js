import {
  BALLOT_SELECT_CHOICE, BALLOT_UPDATE_CHOICE,
  BALLOT_SUBMIT_OPTIMIST, BALLOT_SUBMIT_SUCCESS, BALLOT_SUBMIT_ERROR,
  BALLOT_LOAD,
  BALLOT_SUBMIT_UPDATE_SUCCESS,
} from '../actions/Ballot.js';

export default function Ballot(state = {
  readyForSubmit:     false,
  savingOptimisticly: false,
  saved:              false,
  error:              {},
  errorMessage:       '',
  lastUpdated:        false,
  choiceSelected:     '1',
  choice: {
    first: {
      candidateId:        '',
      candidateName:      {},
      candidateImage:     '',
    },
    second: {
      candidateId:        '',
      candidateName:      {},
      candidateImage:     '',
    },
    third: {
      candidateId:        '',
      candidateName:      {},
      candidateImage:     '',
    },
    veto: {
      candidateId:        '',
      candidateName:      {},
      candidateImage:     '',
    },
  }
}, action) {
  switch (action.type) {
    // babel doesn't encapsulate the let/const instantiation per case

    case BALLOT_SELECT_CHOICE:
      let whichChoice =       action.choiceSelected;
      let resetChoice = {};
      switch (whichChoice) {
        case '2':
          resetChoice = {
            second: {
              candidateId:        '',
              candidateName:      {},
              candidateImage:     '',
            }
          };
          break;

        case '3':
          resetChoice = {
            third: {
              candidateId:        '',
              candidateName:      {},
              candidateImage:     '',
            }
          };
          break;

        case 'veto':
          resetChoice = {
            veto: {
              candidateId:        '',
              candidateName:      {},
              candidateImage:     '',
            }
          };
          break;

        default:
          resetChoice = {
            first: {
              candidateId:        '',
              candidateName:      {},
              candidateImage:     '',
            }
          };
      };

      let choice = Object.assign({}, state.choice, resetChoice);

      return Object.assign({}, state, {
        choice:                 choice,
        choiceSelected:         action.choiceSelected,
        lastUpdated:            action.updatedAt,
      });


    case BALLOT_UPDATE_CHOICE:
      whichChoice =       state.choiceSelected;
      let newChoice = {};
      let nextChoice = whichChoice;

      switch (whichChoice) {
        case '2':
          newChoice.second = {
            candidateId:        action.data._id,
            candidateName:      action.data.name,
            candidateImage:     action.data.image,
          };
          nextChoice = state.readyForSubmit? '0' : '3';

          break;

        case '3':
          newChoice.third = {
            candidateId:        action.data._id,
            candidateName:      action.data.name,
            candidateImage:     action.data.image,
          };
          nextChoice = state.readyForSubmit? '0' : 'veto';

          break;

        case 'veto':
          newChoice.veto = {
            candidateId:        action.data._id,
            candidateName:      action.data.name,
            candidateImage:     action.data.image,
          };
          nextChoice = '0';
          break;

        default:
          newChoice.first = {
            candidateId:        action.data._id,
            candidateName:      action.data.name,
            candidateImage:     action.data.image,
          };
          nextChoice = state.readyForSubmit? '0' : '2';
      };

      choice = Object.assign({}, state.choice, newChoice);

      const newKey = Object.keys(newChoice)[0];
      let keyOptions = Object.keys(choice);
      const keyDex = keyOptions.indexOf(newKey); // 0
      keyOptions.splice(keyDex, 1);

      _.each(keyOptions, (thisKey)=> {
        if(choice[thisKey].candidateId === choice[newKey].candidateId){
          choice[thisKey] = {
            candidateId:        '',
            candidateName:      {},
            candidateImage:     '',
          }
        }
      });

      const readyForSubmit = choice.first.candidateId.length>0 && choice.second.candidateId.length>0 && choice.third.candidateId.length>0 && choice.veto.candidateId.length>0;

      return Object.assign({}, state, {
        choice:                 choice,
        choiceSelected:         nextChoice,
        readyForSubmit:         readyForSubmit,
        lastUpdated:            action.updatedAt,
      });



    // TODO: Fix the rest for ranked version and and candidateImage
    case BALLOT_LOAD:
      return Object.assign({}, state, {
        candidateId:            action.candidateId,
        candidateName:          action.candidateName,

        readyForSubmit:         action.submitReady,
        lastUpdated:            action.updatedAt,
      });

    case BALLOT_SUBMIT_OPTIMIST:
      return Object.assign({}, state, {
        candidateId:            action.candidateId,

        savingOptimisticly:     action.savingOptimisticly,
        error:                  action.error,
        errorMessage:           action.errorMessage,
        saved:                  action.saved,
        lastUpdated:            action.updatedAt,
      });

    case BALLOT_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        candidateId:            action.data._id,
        candidateName:          action.data.name,

        savingOptimisticly:     action.savingOptimisticly,
        error:                  action.error,
        errorMessage:           action.errorMessage,
        saved:                  action.saved,
        lastUpdated:            action.updatedAt,
      });

    case BALLOT_SUBMIT_ERROR:
      return Object.assign({}, state, {

        savingOptimisticly:     action.savingOptimisticly,
        error:                  action.error,
        errorMessage:           action.errorMessage,
        saved:                  action.saved,
        lastUpdated:            action.updatedAt,
      });

    case BALLOT_SUBMIT_UPDATE_SUCCESS:
      return Object.assign({}, state, {
        readyForSubmit:         action.submitReady,
        savingOptimisticly:     action.savingOptimisticly,
        error:                  action.error,
        errorMessage:           action.errorMessage,
        saved:                  action.saved,
        lastUpdated:            action.updatedAt,
      });

    default:
      return state;
  }
};
