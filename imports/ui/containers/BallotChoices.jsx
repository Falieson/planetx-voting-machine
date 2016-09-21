import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Gavel from 'material-ui/svg-icons/action/gavel';
import Delete from 'material-ui/svg-icons/action/delete-forever';


// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };
// smallIcon: {
//   width: 36,
//   height: 36,
// },
// largeIcon: {
//   width: 60,
//   height: 60,
// },
// medium: {
//   width: 96,
//   height: 96,
//   padding: 24,
// },
// large: {
//   width: 120,
//   height: 120,
//   padding: 30,
// },

  // width: 72,
  // height: 72,
  // padding: 16,
  //
  //   width:    48,
  //   height:   48,

const styles = {
  badgeIcon: {
    top:          10,
    left:         36
  },
  badge: {
    padding:      3,
    width:        '24%',
  },
  badgeLast: {
    padding:      3,
    width:        '24%',
    borderRight:  '2px solid rgb(218, 165, 63)',
  },
  small: {
    height:       72,
    padding:      6,
    width:        '100%',
    textAlign:    'left'
  },
};
// tooltip=        "First Choice"
// touch=          {true}
// tooltip=        "Second Choice"
// touch=          {true}
// tooltip=        "Third Choice"
// touch=          {true}

const ChoiceIconFirst = () => (
  <Badge
    badgeContent={'1st'}
    secondary={true}
    badgeStyle={styles.badgeIcon}
    style={styles.badge}
  >
    <FlatButton
      label=          "+3 Points"
      labelPosition=  "after"
      iconStyle=      {styles.mediumIcon}
      style=          {styles.small}
      icon=           {<Gavel />}
    />
  </Badge>
);
const ChoiceIconSecond = () => (
  <Badge
    badgeContent={'2nd'}
    secondary={true}
    badgeStyle={styles.badgeIcon}
    style={styles.badge}
  >
    <FlatButton
      label=          "+2 Points"
      labelPosition=  "after"
      iconStyle=      {styles.mediumIcon}
      style=          {styles.small}
      icon=           {<Gavel />}
    />
  </Badge>
);
const ChoiceIconThird = () => (
  <Badge
    badgeContent={'3rd'}
    secondary={true}
    badgeStyle={styles.badgeIcon}
    style={styles.badgeLast}
  >
    <FlatButton
      label=          "+1 Point"
      labelPosition=  "after"
      iconStyle=      {styles.mediumIcon}
      style=          {styles.small}
      icon=           {<Gavel />}
    />
  </Badge>
);
const ChoiceIconBlock = () => (
  <Badge
    badgeContent={'Veto'}
    secondary={true}
    badgeStyle={styles.badgeIcon}
    style={styles.badge}
  >
    <FlatButton
      label=          "-3 Points"
      labelPosition=  "after"
      iconStyle=      {styles.mediumIcon}
      style=          {styles.small}
      icon=           {<Delete />}
    />
  </Badge>
);

const BallotChoicesContainer = () => (
  <Paper zDepth={1}>
    <ChoiceIconFirst />
    <ChoiceIconSecond />
    <ChoiceIconThird />
    <ChoiceIconBlock />
  </Paper>
);

export default BallotChoicesContainer;
