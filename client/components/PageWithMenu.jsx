import React from 'react';
// import ThemeManager from '../libs/thememanager';
import {Menu} from 'material-ui';

class PageWithMenu extends React.Component {
  // getChildContext() {
  //   return {
  //     muiTheme: ThemeManager.getCurrentTheme()
  //   };
  // }

  render() {
    const wrapperStyle = {
      paddingTop: '64px',
      position: 'relative'
    };

    const menuStyle = {
      position: 'absolute',
      borderTop: 'none',
      overflow: 'hidden',
      top: '64px',
      width: '192px'
    };

    const contentStyle = {
      borderLeft: 'solid 1px #e0e0e0',
      boxSizing: 'border-box',
      marginLeft: '192px',
      minHeight: '800px',
      padding: '24px'
    };

    return (
      <div style={wrapperStyle}>
        <div style={contentStyle}>
          {this.props.children}
        </div>

        <div style={menuStyle}>
          <Menu
            hideable={false}
            menuItems={this.props.menuItems}
            onChange={this.props.onChange} />
        </div>
      </div>
    );
  }
}

// PageWithMenu.contextTypes = {
//   router: React.PropTypes.func
// };
//
// PageWithMenu.childContextTypes = {
//   muiTheme: React.PropTypes.object
// };

export default PageWithMenu;
