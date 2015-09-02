import React from 'react';
// import ThemeManager from '../libs/thememanager';
import {FontIcon, IconButton, Toolbar, ToolbarGroup} from 'material-ui';

class Editor extends React.Component {
  render() {
    return (
      <div className='editor'>
        <h2>{this.props.title}</h2>
        <Toolbar>
          <ToolbarGroup key={0}>
            <IconButton>
              <FontIcon className='fa fa-bold' />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default Editor;
