// Ref: https://html5hive.org/reactjs-form-validation-tutorial/

function validateEmail(value) {
  // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};
