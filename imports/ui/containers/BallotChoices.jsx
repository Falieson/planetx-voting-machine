import {Component, PropTypes} from 'react';
import {Row, Col} from 'react-flexbox-grid/lib/index';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Gavel from 'material-ui/svg-icons/action/gavel';
import Delete from 'material-ui/svg-icons/action/delete-forever';

class BallotChoicesContainer extends Component {
  render() {

    const styles = {
      badgeIcon: {
        top:          10,
        left:         36
      },
      badge: {
        padding:      3,
        width:        '100%',
      },
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
        border:       '2px dashed rgb(59, 154, 80)',
      },
      smallUpThree: {
        height:       72,
        padding:      6,
        width:        '100%',
        textAlign:    'left',
        border:       '2px dashed rgb(74, 136, 88)',
      },
      smallDown: {
        height:       72,
        padding:      6,
        width:        '100%',
        textAlign:    'left',
        border:       '2px dashed rgb(218, 165, 63)',
      },
    };

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
          style=          {styles.smallUpOne}
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
          style=          {styles.smallUpTwo}
          icon=           {<Gavel />}
        />
      </Badge>
    );
    const ChoiceIconThird = () => (
      <Badge
        badgeContent={'3rd'}
        secondary={true}
        badgeStyle={styles.badgeIcon}
        style={styles.badge}
      >
        <FlatButton
          label=          "+1 Point"
          labelPosition=  "after"
          style=          {styles.smallUpThree}
          icon=           {<Gavel />}
        />
      </Badge>
    );
    const ChoiceIconVeto = () => (
      <Badge
        badgeContent={'Veto'}
        secondary={true}
        badgeStyle={styles.badgeIcon}
        style={styles.badge}
      >
        <FlatButton
          label=          "-3 Points"
          labelPosition=  "after"
          style=          {styles.smallDown}
          icon=           {<Delete />}
        />
      </Badge>
    );

    return (
      <Paper zDepth={1} style={this.props.style}>
        <Row start="xs">
          <Col xs >
            <ChoiceIconFirst />
          </Col>
          <Col xs >
            <ChoiceIconSecond />
          </Col>
          <Col xs >
            <ChoiceIconThird />
          </Col>
          <Col xs >
            <ChoiceIconVeto />
          </Col>
        </Row>
      </Paper>
    );
  }
}

BallotChoicesContainer.propTypes = {
  style: PropTypes.object,
}

export default BallotChoicesContainer;
