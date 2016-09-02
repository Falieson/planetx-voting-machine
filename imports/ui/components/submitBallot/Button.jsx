import React, {Component, PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SubmitBallotButton extends Component {
  render() {
    const candidate = this.props.selectedCandidate;

    const callToAction =()=> {
      if(candidate){
        return `Vote for ${candidate}`;
      }
      else{
        return `Make your Selection`;
      }
    }
    const isDisabled =()=> candidate? false:true;

    return (
      <RaisedButton
        label={callToAction()}
        disabled={isDisabled()}
        fullWidth={true}
      />
    );
  }
}

SubmitBallotButton.propTypes = {
  selectedCandidate: PropTypes.string,
}
