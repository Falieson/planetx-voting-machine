import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={4} />
    <Paper style={style} zDepth={5} />
  </div>
);

export default PaperExampleSimple;


/* Registration Form
  Fields:
    Email: (login with this)
    Password:
    Public Alias / Name:

  Disabled until Candidate Selected
  CTA: "Change your mind? Register to be able to update your ballot!"
  Notes:
  -- "Your email will never be share or used for marketing"
  -- "All Notifications are opt-in from your settings page"
*/

// import React from 'react';
//
// import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
//
// // const style = {
// //   height: 100,
// //   width: 100,
// //   margin: 20,
// //   textAlign: 'center',
// //   display: 'inline-block',
// // };
//
// export default const form = ()=> (
//   <div>
//     <TextField
//       hintText="Email Address"
//       floatingLabelText="Never sold or spammed"
//     />
//     <br />
//     <TextField
//       hintText="Password Field"
//       floatingLabelText="Password"
//       type="password"
//     />
//   </div>
// );
//
// //  const VoterRegisterForm = () => (
// //   <Paper style={style} zDepth={1} children={form} />
// // );
