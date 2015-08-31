import ThemeManager from '../libs/thememanager';
import React from 'react';
import {AppBar} from 'material-ui';

class Header extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <AppBar
        title='Confboard'
        onLeftIconButtonTouchTap={this.props.leftNav.toggle} />
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.func
};

Header.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default Header;