// Libraries: React
import React        from 'react';
import { Link }     from 'react-router'

//  UI Components
import AppBar       from 'material-ui/AppBar';
import FlatButton   from 'material-ui/FlatButton';
import IconButton   from 'material-ui/IconButton';
import Input        from 'material-ui/svg-icons/action/input';


const Title = (
  <Link to='/'>
    Voting Machine - U.S.A. 2016 Presedential Election
  </Link>
);

const Header = () => (
  <AppBar
    title       = {Title}
    showMenuIconButton={false}
    iconElementRight={
      <FlatButton
        style={{color: 'white'}}
        href="/login/"
        label="Login"
        labelPosition="before"
        icon={<Input />}
      />
    }
  />
);

export default Header;
