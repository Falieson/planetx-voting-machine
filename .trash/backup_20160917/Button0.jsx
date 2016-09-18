import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SubmitBallotButton extends Component {
  render() {
    function callToAction(name, update) {
      if(name){
        if(update)  return `Update your Ballot for ${name}`;
        else  return `Vote for ${name}`;
      }
      else{
        return `Make your Selection`;
      }
    }

    const candidate = this.props.candidateName? this.props.candidateName:false;
    const {isUpdate, isReady} = this.props;

    return (
      <RaisedButton
        label       = {callToAction(candidate.formal, isUpdate)}
        primary     = {true}
        onTouchTap  = {this.handleSubmit}
        disabled    = {!isReady}
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
  isReady:        PropTypes.bool,
  isUpdate:       PropTypes.bool,
  onSubmit:       PropTypes.func.isRequired,
}
