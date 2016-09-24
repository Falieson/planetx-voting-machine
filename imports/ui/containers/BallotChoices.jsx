import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-flexbox-grid/lib/index';

import Paper from 'material-ui/Paper';

// Components
// Deviating from SOP with Containers versus DumbComponents, BallotChoicesButton is Smart.
import BallotChoicesButton    from '../components/ballotChoices/SmartButton.jsx';


class BallotChoicesContainer extends Component {
  render() {
    const style = {
      padding: '0 2px',
    }

    return (
      <Paper zDepth={1}>
        <Row start="xs">
          <Col style={style} xs>
            <BallotChoicesButton
              choice={'1'}
            />
            </Col>
          <Col style={style} xs>
            <BallotChoicesButton
              choice={'2'}
            />
            </Col>
          <Col style={style} xs>
            <BallotChoicesButton
              choice={'3'}
            />
            </Col>
          <Col style={style} xs>
            <BallotChoicesButton
              choice={'veto'}
            />
            </Col>
        </Row>
      </Paper>
    );
  }

}

BallotChoicesContainer.propTypes = {

}

export default BallotChoicesContainer;
