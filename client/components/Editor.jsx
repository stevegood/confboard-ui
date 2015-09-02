import NoteActions from '../actions/note-actions';
import React from 'react';
import mui from 'material-ui';
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
  constructor(props) {
    super(props);

    this.state = {
      hasChanged: false,
      originalNote: this.props.note || {text: ''}
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(e) {
    this.setState({hasChanged: e.target.value !== this.state.originalNote.text});
  }

  onSave() {
    const text = this.refs.editorField.getValue();
    console.log('Saving value:', text);
  }

  render() {
    const {title, note} = this.props;
    const avatar = <Avatar>{title[0].toUpperCase()}</Avatar>;
    return (
      <Card className='editor'>
        <CardHeader
          title={title}
          avatar={avatar} />
        <CardText>
          <Toolbar>
            <ToolbarGroup key={0}>
              <FontIcon
                className='fa fa-floppy-o'
                color={this.state.hasChanged ? mui.Styles.Colors.blue500 : null}
                onClick={this.onSave} />
              <ToolbarSeparator />
              <FontIcon className='fa fa-bold' />
              <FontIcon className='fa fa-italic' />
              <FontIcon className='fa fa-underline' />
            </ToolbarGroup>
          </Toolbar>

          <TextField
            ref="editorField"
            className="editor-field"
            hintText="Notes..."
            defaultValue={note.text}
            multiLine={true}
            onChange={this.onChange} />
        </CardText>
      </Card>
    );
  }
}

export default Editor;
