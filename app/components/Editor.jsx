import React from 'react';
import ThemeManager from '../libs/thememanager';
import {IconButton, Toolbar, ToolbarGroup} from 'material-ui';
import Icon from 'react-fa';

class Editor extends React.Component {
  render() {
    return (
      <div className='editor'>
        <h2>{this.props.title}</h2>
        <Toolbar>
          <ToolbarGroup key={0}>
            <IconButton>
              <Icon name='bold' />
            </IconButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default Editor;