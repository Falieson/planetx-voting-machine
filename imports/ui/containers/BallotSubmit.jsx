// Libraries - Imported
import { Meteor }              from 'meteor/meteor';
import Tracker                 from 'tracker-component';
import {Component, PropTypes}  from 'react';
import {connect}               from 'react-redux';

// Actions
import {submitVoterRegistrationThenBallot}  from '../actions/Account.js';
import {updateBallotForCurrentVoter}        from '../actions/Ballot.js';

// Components
import SubmitBallotButton         from '../components/submitBallot/Button.jsx';


// Ballot Container - Show Ballot Submit Button
// Container: interacts with store and db
class BallotSubmitContainer extends Tracker.Component {
  constructor(){
    super();

    this.state = {
      loggedIn: false,
    }
  }
  componentWillMount() {
    this.autorun(()=> {
      this.setState({loggedIn: Meteor.userId()? true:false})
    });
  }

  render() {
    const { candidateName, submitIsReady } = this.props;

    return (
      <div style={this.props.style}>
        <SubmitBallotButton
          candidateName = {candidateName}
          ready         = {submitIsReady}
          onSubmit      = {this.onSubmitBallot.bind(this)}
        />
      </div>
    );
  }

  onSubmitBallot = ()=> {
    const {
      dispatch, candidateId, accountInfo
    }  = this.props;

    if(this.state.loggedIn) dispatch( updateBallotForCurrentVoter(candidateId) );
    else dispatch( submitVoterRegistrationThenBallot(accountInfo, candidateId) );
  }
}

function mapStoreToProps(store) {
  // TODO: Update this with react-reselect so it only recomputes when a necessary value is changed
  const { Ballot, Account } = store;

  // Selected Candidate
  const {
    candidateId,
    candidateName
  } = Ballot || {
    candidateId   : '',
    candidateName : {}
  };

  // New Account Info
  const {
    username, email, password,
    usernameValid, emailValid, passwordValid
  } = Account || {
    username: '', email: '', password: '',
    usernameValid: false, emailValid: false, passwordValid: false
  };

  const accountInfo = { username, email, password };

  // Enable or Disable the Submit Button
  const AccountReadyForSubmit = usernameValid && emailValid && passwordValid;
  const BallotReadyForSubmit = Ballot.readyForSubmit? true : false;
  const userId = Meteor.userId();
  const loggedIn = userId && userId.length>0;

  const submitIsReady = BallotReadyForSubmit && (AccountReadyForSubmit || loggedIn);

  return { candidateId, candidateName, accountInfo, submitIsReady };
}

BallotSubmitContainer.propTypes = {
  style: PropTypes.object,
}

export default connect(mapStoreToProps)(BallotSubmitContainer);
