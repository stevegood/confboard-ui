import React from 'react';
import {
  Avatar,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  FontIcon,
  TextField,
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator
} from 'material-ui';

class Editor extends React.Component {
  render() {
    const {title} = this.props;
    const avatar = <Avatar>{title[0].toUpperCase()}</Avatar>;
    return (
      <Card className='editor'>
        <CardHeader
          title={title}
          avatar={avatar} />
        <CardText>
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
        </CardText>
      </Card>
    );
  }
}

export default Editor;
