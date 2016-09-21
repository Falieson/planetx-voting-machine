// Libraries - Imported
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReactTransitionGroup from 'react-addons-transition-group';

// Libraries - Layout
import { Row, Col } from 'react-flexbox-grid/lib/index';


// Containers (Components)
import BallotChoicesContainer   from '../containers/BallotChoices.jsx';
import CandidatesListContainer  from '../containers/CandidateList.jsx';
import NewAccountContainer      from '../containers/NewAccount.jsx';
import BallotSubmitContainer    from '../containers/BallotSubmit.jsx';

// Ballot Page - list of candidates, select candidate, register, and vote
// <BallotPage layout="landscape" deviceType="mobile" />

class BallotPage extends Tracker.Component {
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
    const style = {
      choices:  undefined,
      list:     undefined,
      register: undefined,
      submit:   undefined,
    };

    return (
      <div>
        <Row>
          <Col type="row" xs={12}>
            <BallotChoicesContainer style={style.choices} />
          </Col>
        </Row>
        <Row>
          <Col type="row" xs={12}>
            <CandidatesListContainer style={style.list} />
          </Col>
        </Row>
        {this.state.loggedIn? null : this.renderVoterRegistration(style.register)}
        <Row>
          <Col type="row" xs={12}>
            <BallotSubmitContainer style={style.submit} />
          </Col>
        </Row>
      </div>
    );
  }

  renderVoterRegistration(containerStyle) {
    // Correct way of only rendering 0-1 child component
    // https://github.com/facebook/react/blob/master/docs/docs/10.1-animation.md
    const FirstChild = React.createClass({
      render: function() {
        const children = React.Children.toArray(this.props.children);
        return children[0] || null;
      }
    });

    return (
      <ReactTransitionGroup component={FirstChild}>
        {this.props.ballotReady? <Row><Col type="row" xs={12}><NewAccountContainer style={containerStyle} /></Col></Row> : null}
      </ReactTransitionGroup>
    );
  }
}

function mapStoreToProps(store) {
  const { Ballot } = store;

  const ballotReady = Ballot.readyForSubmit;

  return { ballotReady };
}

export default connect(mapStoreToProps)(BallotPage);
