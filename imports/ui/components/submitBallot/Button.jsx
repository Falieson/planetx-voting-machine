import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SubmitBallotButton extends Component {
  render() {
    const candidate = this.props.candidateName? this.props.candidateName:false;
    const ballotComplete = this.props.ready? false:true;

    function callToAction(name) {
      if(name){
        return `Vote for ${name}`;
      }
      else{
        return `Make your Selection`;
      }
    }

    return (
      <RaisedButton
        label={callToAction(candidate.formal)}
        disabled={ballotComplete}
        fullWidth={true}
      />
    );
  }
}

SubmitBallotButton.propTypes = {
  candidateName: PropTypes.object,
  ready: PropTypes.bool
}
