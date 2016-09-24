import { Meteor } from 'meteor/meteor';
import React, {Component}  from 'react';

//  UI Components
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const style = {
      container: {
        width: '300px',
        display: 'block',
        margin: '0 auto',
        padding: '0 auto',
      },
      h1: {
        textAlign: 'center',
        padding: '10px 0 0 5px',
        margin: '0 0 0 0',
      },
      field: {
        marginLeft: '10px',
      }
    };

    const InputEmail = (
      <TextField
        floatingLabelText     = "Email or Username"
        hintText              = "Login Name"
        style                 = {style.field}
        onChange              = {this.handleChangeEmail.bind(this)}
        onKeyPress            = {this.handleEnterKey}
      />
    );

    const InputPassword = (
      <TextField
        floatingLabelText     = "Password"
        hintText              = "Password"
        type                  = "password"
        style                 = {style.field}
        onChange              = {this.handleChangePassword.bind(this)}
        onKeyPress            = {this.handleEnterKey}
      />
    );

    const SubmitLoginBtn = (
      <RaisedButton
        label                 = "Login"
        primary               = {true}
        fullWidth             = {true}
        onTouchTap            = {this.handleSubmit}
      />
    )

    return (
      <Paper style={style.container} zDepth={1}>
        <h1 style={style.h1}>Welcome Back</h1>
        {InputEmail}<br />
        {InputPassword}<br />
        {SubmitLoginBtn}
      </Paper>
    );
  }

  handleChangeEmail() {
    event.preventDefault();

    const value = arguments[1];
    this.setState({email: value});
  }

  handleChangePassword() {
    event.preventDefault();

    const value = arguments[1];
    this.setState({password: value});
  }

  handleEnterKey = event => {
    if(event.key === 'Enter'){
      this.handleSubmit();
    }
  }

  handleSubmit = event => {
    if(event) event.preventDefault();

    // email or username works
    const {email, password} = this.state;

    Meteor.loginWithPassword(email, password, function(error) {
      if(error){
        console.log(error.message)
      }
      else {
        window.location = '/';
      }
    });
  }
};
