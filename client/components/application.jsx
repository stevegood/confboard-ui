import React from 'react/addons';
import uuid from 'node-uuid';
import {AppBar, AppCanvas} from 'material-ui';
import ThemeManager from '../libs/theme-manager';
import PageWithMenu from './PageWithMenu.jsx';
import NoteEditor from './note-editor.jsx';

const schedule = [
  {
    text: 'Doing cool things with code',
    id: uuid.v4()
  }
];

const notes = [
  {
    text: 'This is an amazing talk!',
    scheduleId: schedule[0].id
  }
];

export default class Application extends React.Component {
  static get contextTypes() {
    return {
      router: React.PropTypes.func
    };
  }

  static get childContextTypes() {
    return {
      muiTheme : React.PropTypes.object
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      showSchedule: true,
      schedule: schedule,
      notes: notes
    };

    this.onItemSelected = this.onItemSelected.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  render() {
    const schedule = this.state.schedule;
    const selectedSchedule = schedule[0];
    const selectedNote = notes[0];

    return (
      <AppCanvas className='app'>
        <AppBar title='Confboard' />
        <PageWithMenu
          menuItems={schedule}
          onChange={this.onItemSelected}>

          <NoteEditor title={selectedSchedule.text} note={selectedNote} />

        </PageWithMenu>
      </AppCanvas>
    )
  }

  onItemSelected(e, value) {
    console.log('item selected', value);
  }
}
