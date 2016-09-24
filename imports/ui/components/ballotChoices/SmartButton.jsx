// Libraries - Imported
import React, {Component, PropTypes}  from 'react';
import {connect}               from 'react-redux';

// Actions
import {updateBallotChoiceSelected}   from '../../actions/Ballot.js';

// Libraries - UI
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Gavel  from 'material-ui/svg-icons/action/gavel';
import Choose from 'material-ui/svg-icons/action/get-app';
import Delete from 'material-ui/svg-icons/action/delete-forever';


// This is a SmartButton in the DumbComponents folder.
// It is smart because it determines its own proper state from the store
/*
  Args:
  1.  buttonForChoice?    => this.props.choice
  2.  choiceIsSelected?   => this.props.isSelected
  3.  choiceForCandidate? => this.props.candidateSelected

  Decisions:
  1.  Choose Style
  2.  Choose Content
  3.  handleBadgeTap
    if(hasCandidateId) => dispatch(clearCandidateBecauseTargetChoiceChangedTo(thisButtonChoice))
    elseif(isAlreadySelected) => doNothing()
    else => dispatch(targetChoiceChangedTo(thisButtonChoice))
*/

class BallotChoiceButton extends Component {
  selectStyle() {
    const styles = {
      smallUpOne: {
        height:       72,
        padding:      6,
        width:        '100%',
        textAlign:    'left',
        border:       '2px dashed rgb(78, 181, 101)',
      },
      smallUpTwo: {
        height:       72,
        padding:      6,
        width:        '100%',
        textAlign:    'left',
        border:       '2px dashed rgb(52, 129, 69)',
      },
      smallUpThree: {
        height:       72,
        padding:      6,
        width:        '100%',
        textAlign:    'left',
        border:       '2px dashed rgb(53, 101, 64)',
      },
      smallDown: {
        height:       72,
        padding:      6,
        width:        '100%',
        textAlign:    'left',
        border:       '2px dashed rgb(218, 165, 63)',
      },
      badgeIcon: {
        top:          10,
        left:         36
      },
      badge: {
        padding:      3,
        width:        '97%',
      },
      avatarIcon: {
        top:          10,
        left:         10
      },
    };

    let style = {};

    switch (this.props.choice) {
      case 'veto':
        style = {icon: styles.smallDown, badge: styles.badge};
        break;
      case '3':
        style = {icon: styles.smallUpThree, badge: styles.badge};
        break;
      case '2':
        style = {icon: styles.smallUpTwo, badge: styles.badge};
        break;
      default:
        style = {icon: styles.smallUpOne, badge: styles.badge};
    }

    if(this.props.candidateSelected){
      style = Object.assign({}, style, {badgeIcon: styles.avatarIcon});
    }
    else {
      style = Object.assign({}, style, {badgeIcon: styles.badgeIcon});
    }

    return style;
  }

  selectContent() {
    let badge = '';
    let label = '';
    const {
      choice, isSelected, candidateSelected, candidate
    } = this.props;

    switch(choice){
      case 'veto':
        badge = 'Veto';
        label = "-3 Points";
        break;
      case '3':
        badge = '3rd';
        label = "+1 Point";
        break;
      case '2':
        badge = '2nd';
        label = "+2 Points";
        break;
      default:
        badge = '1st';
        label = "+3 Points";
    }


    let icon;
    if(isSelected){
      label = "Choose Now";
      icon =  (<Choose />);
    }
    else if(candidateSelected){
      label = candidate.name.last;
      icon = (<Avatar src={candidate.image} />);
    }
    else icon = (<Gavel />);

    return {label, badge, icon};
  }

  render() {
    const styles = this.selectStyle();
    const content = this.selectContent();

    return (
      <Badge
        badgeContent= {content.badge}
        secondary=    {true}
        badgeStyle=   {styles.badgeIcon}
        style=        {styles.badge}
        onTouchTap=   {this.handleChoiceSelected.bind(this)}
      >
        <FlatButton
          label=          {content.label}
          labelPosition=  "after"
          style=          {styles.icon}
          icon=           {content.icon}
        />
      </Badge>
    );
  }

  handleChoiceSelected =()=> {
    const {dispatch, choice} = this.props;
    dispatch( updateBallotChoiceSelected(choice) );
  }
}

BallotChoiceButton.propTypes = {
  choice: PropTypes.string.isRequired,
}

function mapStoreToProps(store, props) {
  const thisButtonChoice = props.choice;
  const { Ballot } = store;

  // Get info from the store for this button
  let thisCandidateChoice = {};
  switch (thisButtonChoice) {
    case '2':
      thisCandidateChoice = Ballot.choice.second || {};
      break;

    case '3':
      thisCandidateChoice = Ballot.choice.third || {};
      break;

    case 'veto':
      thisCandidateChoice = Ballot.choice.veto || {};
      break;

    default:
      thisCandidateChoice = Ballot.choice.first || {};
  };

  const candidate = {
    id:     thisCandidateChoice.candidateId,
    name:   thisCandidateChoice.candidateName,
    image:  thisCandidateChoice.candidateImage,
  };

  let candidateSelected = false;
  if(candidate.id && candidate.id.length >= 1) candidateSelected = true;

  // Current ballot choice being filled
  const currentChoice = Ballot.choiceSelected || '1';

  let isSelected = false;
  if(thisButtonChoice === currentChoice) isSelected = true;

  return {
    isSelected, candidate, candidateSelected,
  }
}


export default connect(mapStoreToProps)(BallotChoiceButton);
