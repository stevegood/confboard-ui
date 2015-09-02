import React from 'react';
import {Menu} from 'material-ui';

class PageWithMenu extends React.Component {

  render() {
    return (
      <div className="page-with-menu">
        <div className="page-content">
          {this.props.children}
        </div>

        <div className="page-menu">
          <Menu
            hideable={false}
            menuItems={this.props.menuItems}
            onChange={this.props.onChange} />
        </div>
      </div>
    );
  }
}

export default PageWithMenu;
