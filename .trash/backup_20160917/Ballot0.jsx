// Libraries - Imported
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import { Component } from 'react';
import { connect } from 'react-redux';

import ReactTransitionGroup from 'react-addons-transition-group';

// Libraries - UI
import Paper from 'material-ui/Paper';

// Containers (Components)
import CandidatesListContainer  from '../containers/CandidateList.jsx';
import NewAccountContainer      from '../containers/NewAccount.jsx';

// Components
import SubmitBallotButton         from '../components/submitBallot/Button.jsx';

// Actions
import {loadBallotforAccount}               from '../actions/Ballot.js';
import {submitVoterRegistrationThenBallot}  from '../actions/Account.js';

// Ballot Page - list of candidates, select candidate, register, and vote
// <BallotPage layout="landscape" deviceType="mobile" />
class BallotPage extends Tracker.Component {
  constructor(props){
    super(props);

    this.state = {
      candidateId:        this.props.candidateId,
      loggedIn:           false,
      newAccountValid:    false,
      NewAccount:         {},
    }
  }
  componentWillMount() {
    this.autorun(()=> {
      const {dispatch} = this.props;

      const userId = Meteor.userId();

      if(userId){
        this.subscribe('myBallot');
        dispatch( loadBallotforAccount() );
      }

      this.setState({loggedIn: userId? true:false})
    });
  }


  // RENDERS
  renderVoterRegistration() {
    // Correct way of only rendering 0-1 child component
    // https://github.com/facebook/react/blob/master/docs/docs/10.1-animation.md
    const FirstChild = React.createClass({
      render: function() {
        const children = React.Children.toArray(this.props.children);
        return children[0] || null;
      }
    });

    return (
      <ReactTransitionGroup component={FirstChild}>
        {
          this.props.BallotReadyForSubmit?
            <NewAccountContainer
              onFormValidate  = {this.onNewAccountValid.bind(this)}
              onData          = {this.onNewAccountInfo.bind(this)}
            />
            : null
        }
      </ReactTransitionGroup>
    );
  }

  render() {
    const style = {
      height: "100%"
    };
    const { candidateName } = this.props;
    const {
      candidateId, loggedIn, newAccountValid, NewAccount
    } = this.state;

    const isCandidateId = candidateId && candidateId.length>0;
    const isReady = isCandidateId && (loggedIn || newAccountValid)? true:false;

    console.log("isReady ", isReady);


    return (
      <Paper style={style} zDepth={1} rounded={false}>
        <CandidatesListContainer
          onSelect          = {this.onCandidateSelected.bind(this)}
        />
        {this.state.loggedIn? null : this.renderVoterRegistration()}
        <SubmitBallotButton
          candidateName     = {candidateName}
          isReady           = {isReady}
          isUpdate          = {loggedIn}
          onSubmit          = {this.onSubmitBallot.bind(this)}
        />
      </Paper>
    );
  }

  // RENDERED CONTAINER/COMPONENT RESULTS
  onCandidateSelected() {
    const candidateId = arguments[1];
    console.log("candidateId? ", candidateId);

    this.setState({candidateId});
  }

  onNewAccountValid() {
    const newAccountValid = arguments[1];
    console.log("newAccountValid? ", newAccountValid);

    this.setState({newAccountValid});
  }

  onNewAccountInfo() {
    const NewAccount = arguments[1];
    console.log("NewAccount? ", NewAccount);

    this.setState({NewAccount});
  }

  onSubmitBallot() {
    const {
      dispatch, candidateId
    }  = this.props;

    // NOTE: This doesn't work for a user that wants to UPDATE their ballot
    // create account and then subit ballot
    dispatch( submitVoterRegistrationThenBallot(this.state.NewAccount, candidateId) );
  }
}

function mapStoreToProps(store) {
  const { Ballot, Account } = store;

  // Selected Candidate
  const {
    candidateId,
    candidateName
  } = Ballot || {
    candidateId   : '',
    candidateName : {}
  };
  const BallotReadyForSubmit = Ballot.readyForSubmit;

  return { candidateId, candidateName, BallotReadyForSubmit };

  // // New Account Info
  // const {
  //   username, email, password,
  //   usernameValid, emailValid, passwordValid
  // } = Account || {
  //   username: '', email: '', password: '',
  //   usernameValid: false, emailValid: false, passwordValid: false
  // };
  // const accountInfo = { username, email, password };
  // const AccountReadyForSubmit = usernameValid && emailValid && passwordValid;
  //
  // return { candidateId, candidateName, BallotReadyForSubmit, accountInfo, AccountReadyForSubmit};
}

export default connect(mapStoreToProps)(BallotPage);
