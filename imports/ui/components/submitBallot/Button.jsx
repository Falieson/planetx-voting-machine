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
    const names = this.props.candidateNames;
    const candidate = this.props.candidateName? this.props.candidateName:false;
    const ballotComplete = this.props.ready? true:false;

    function callToAction(nameArr, isReady, isUpdate) {
      function makePretty(arr){
        let text = '[';
        for(let i=0; i<arr.length-1; i++){
          text = `${text}${arr[i]}, `;
        }
        if(arr.length === 4){
          text = text.substring(0, text.length-2)
          text = `${text}], And Veto: ${arr[arr.length-1]}`;
        } else {
          text = `${text}${arr[arr.length-1]}]`;
        }
        return text;
      };

      if(nameArr && nameArr.length>0){
        const nameText = nameArr.length == 1? nameArr[0] : makePretty(nameArr);

        if(isReady && isUpdate) return `Update your Ballot for ${nameText}`;
        else if(isUpdate)       return `Change your Ballot from ${nameText}`;
        else                    return `Vote for ${nameText}`;
      }
      else{
        return `Make your Selection`;
      }
    }

    return (
      <RaisedButton
        label       = {callToAction(names, ballotComplete, this.state.loggedIn)}
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
  candidateNames:  PropTypes.array,
  ready:           PropTypes.bool,
  onSubmit:        PropTypes.func.isRequired,
}
