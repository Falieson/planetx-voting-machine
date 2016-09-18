import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SubmitBallotButton extends Tracker.Component {
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
    const candidate = this.props.candidateName? this.props.candidateName:false;
    const ballotComplete = this.props.ready? true:false;

    function callToAction(name, isReady, isUpdate) {
      if(name){
        if(isReady && isUpdate) return `Update your Ballot for ${name}`;
        else if(isUpdate)       return `Change your Ballot from ${name}`;
        else                    return `Vote for ${name}`;
      }
      else{
        return `Make your Selection`;
      }
    }

    return (
      <RaisedButton
        label       = {callToAction(candidate.formal, ballotComplete, this.state.loggedIn)}
        primary     = {true}
        onTouchTap  = {this.handleSubmit}
        disabled    = {!ballotComplete}
        fullWidth   = {true}
      />
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit()
  }
}

SubmitBallotButton.propTypes = {
  candidateName:  PropTypes.object,
  ready:          PropTypes.bool,
  onSubmit:       PropTypes.func.isRequired,
}
