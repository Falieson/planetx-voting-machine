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
import BallotSubmitContainer    from '../containers/BallotSubmit.jsx';

// Ballot Page - list of candidates, select candidate, register, and vote
class MobileLayout extends Tracker.Component {
  constructor(){
    super();

    this.state = {
      loggedOut: false,
    }
  }
  componentWillMount() {
    this.autorun(()=> {
      this.setState({loggedOut: Meteor.userId()? false:true})
    });
  }

  render() {
    // Mobile Landscape Layout specs
    const style = {
      height: "100%"
    };

    return (
      <Paper style={style} zDepth={1} rounded={false}>
        <CandidatesListContainer />
        {this.state.loggedOut? this.renderVoterRegistration() : null}
        <BallotSubmitContainer
          accountFieldsCompleted  = {this.props.accountReady}
          candidateSelected       = {this.props.ballotReady}
        />
      </Paper>
    );
  }

  renderVoterRegistration() {
    // Correct way of only rendering 0-1 child component
    // https://github.com/facebook/react/blob/master/docs/docs/10.1-animation.md
    var FirstChild = React.createClass({
      render: function() {
        var children = React.Children.toArray(this.props.children);
        return children[0] || null;
      }
    });

    return (
      <ReactTransitionGroup component={FirstChild}>
        {this.props.ballotReady? <NewAccountContainer /> : null}
      </ReactTransitionGroup>
    );
  }
}

function mapStoreToProps(store) {
  const { Ballot, Account } = store;

  const ballotReady = Ballot.readyForSubmit;
  const accountReady = Account.readyForSubmit;

  return { ballotReady, accountReady };
}

export default connect(mapStoreToProps)(MobileLayout);
