import React from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/svg-icons/action/input';

const Header = () => (
  <AppBar
    title="Voting Machine - U.S.A. 2016 Presedential Election"
    iconElementRight={
      <FlatButton
        label="Login"
        labelPosition="before"
        icon={<Input />}
      />
    }
  />
);

export default Header;
