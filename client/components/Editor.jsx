import React from 'react';
import {FontIcon, IconButton, TextField, Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui';

class Editor extends React.Component {
  render() {
    return (
      <div className='editor'>
        <h2>{this.props.title}</h2>
        <Toolbar>
          <ToolbarGroup key={0}>
            <FontIcon className='fa fa-bold' />
            <FontIcon className='fa fa-italic' />
            <FontIcon className='fa fa-underline' />
            <ToolbarSeparator />
          </ToolbarGroup>
        </Toolbar>

        <TextField
          className="editor-field"
          hintText="Notes..."
          multiLine={true} />
      </div>
    );
  }
}

export default Editor;
