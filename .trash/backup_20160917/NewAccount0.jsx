// Libraries - Imported
import { Component, PropTypes }  from 'react';
import { connect }    from 'react-redux';
import { throttle }   from 'lodash';

// Actions
import {
  updateAccountUsername,  updateAccountUsernameInvalid,
  updateAccountEmail,     updateAccountEmailInvalid,
  updateAccountPassword,  updateAccountPasswordInvalid
} from '../actions/Account.js';

// Components
import VoterRegisterForm  from '../components/voterRegister/Form.jsx';

// NewAccount Container - handle registration form
// Container: interacts with store and db
class NewAccountContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        valid: false,
        error: '',
      },
      email: {
        valid: false,
        error: '',
      },
      password: {
        valid: false,
        error: '',
      }
    };
  }

  render() {
    // we don't need to live-update the store, let's limit updates to: 1/150ms
    function slow(func){
      return throttle(func, 150, {leading:false});
    }

    return (
      <VoterRegisterForm
        onChangeUsername    =  {slow(this.onChangeUsername.bind(this))}
        onChangeEmail       =  {slow(this.onChangeEmail.bind(this))}
        onChangePassword    =  {slow(this.onChangePassword.bind(this))}
        validateUser        =  {this.state.username}
        validateEmail       =  {this.state.email}
        validatePassword    =  {this.state.password}
     />
    );
  }

  // NOTE: The validation code below is an easy to read template, you would think creating a function of it and using that instead would clean this up a lot but once you've counted the arguments: {value, minLength, regex, errorMessage, dispatch, dispatchAction} creating a function doesn't save you much space and the template has greater longevity

  onChangeUsername = value => {
    const {dispatch} = this.props;
    const minLength = 8;
    if(value.length>=minLength) {
      const regex = /^(?=.{8,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/;
      const valid = regex.test(value);

      if(valid){
        dispatch( updateAccountUsername(value) );
        const username = {valid: true, error: ''};
        this.setState({username});
      }
      else {
        const username = {
          valid: false,
          error: "8-20 Symbols: James_Bond_007 or James-Bond-007",
        };

        this.setState({username});
        dispatch( updateAccountUsernameInvalid() );
      }
    }
    else {
      const username = {
        valid: false,
        error: "At least 8 characters",
      };

      this.setState({username});
      dispatch( updateAccountUsernameInvalid() );
    }
  }
  onChangeEmail = value => {
    const {dispatch} = this.props;

    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = regex.test(value);

    if(valid){
      dispatch( updateAccountEmail(value) );
      const email = {valid: true, error: ''};
      this.setState({email});
    }
    else {
      const email = {
        valid: false,
        error: 'James.Bond@bss.gov',
      };

      this.setState({email});
      dispatch( updateAccountEmailInvalid() );
    }
  }
  onChangePassword = value => {
    const {dispatch} = this.props;

    const minLength = 8;
    if(value.length>=minLength) {
      const regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;
      const valid = regex.test(value);

      if(valid){
        dispatch( updateAccountPassword(value) );
        const password = {valid: true, error: ''};
        this.setState({password});
      }
      else {
        const password = {
          valid: false,
          error: '1 Uppercase, 1 Lowercase, 1 Number, no spaces',
        };

        this.setState({password});
        dispatch( updateAccountPasswordInvalid() );
      }
    }
    else {
      const password = {
        valid: false,
        error: "At least 8 characters",
      };

      this.setState({password});
      dispatch( updateAccountPasswordInvalid() );
    }
  }

  handleValidForm = event => {
    event.preventDefault();

    const {username, email, password} = this.state;

    // Enable or Disable the Submit Button
    const AccountReadyForSubmit = username.valid && email.valid && password.valid;

    if(AccountReadyForSubmit){
      this.props.onFormValidate(true);
      this.props.onData({username, email, password});
    }
    else this.props.onFormValidate(false);
  }
}

NewAccountContainer.propTypes = {
  onFormValidate:   PropTypes.func.isRequired,
  onData:           PropTypes.func.isRequired,
}

export default connect()(NewAccountContainer);
