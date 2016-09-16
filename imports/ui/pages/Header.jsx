// Libraries
import { Meteor }             from 'meteor/meteor';
import React, { Component }   from 'react';
import Tracker                from 'tracker-component';
import { Link }               from 'react-router'

//  UI Components
import AppBar       from 'material-ui/AppBar';
import FlatButton   from 'material-ui/FlatButton';
import IconButton   from 'material-ui/IconButton';
import Input        from 'material-ui/svg-icons/action/input';
import Exit         from 'material-ui/svg-icons/action/exit-to-app';

export default class CandidatesListContainer extends Tracker.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }
  componentWillMount() {
    this.autorun(()=> {
      if(Meteor.userId()){
        this.setState({loggedIn: true});
      }
      else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    const Title = (
      <Link to='/'>
        Voting Machine - U.S.A. 2016 Presedential Election
      </Link>
    );

    const LoginBtn = (
      <FlatButton
        href="/login/"
        style={{color: 'white'}}
        label="Login"
        labelPosition="before"
        icon={<Input />}
      />
    );

    const LogoutBtn = (
      <FlatButton
        onTouchTap={this.handleLogout}
        style={{color: 'white'}}
        label="Logout"
        labelPosition="before"
        icon={<Exit />}
      />
    );

    return (
      <AppBar
        title       = {Title}
        showMenuIconButton={false}
        iconElementRight={this.state.loggedIn? LogoutBtn : LoginBtn}
      />
    );
  }

  handleLogout() {
    Meteor.logout();
  }
};
