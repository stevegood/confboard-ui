import React from 'react';
import ThemeManager from '../libs/thememanager';
import {AppBar, AppCanvas, Menu, MenuItem} from 'material-ui';
import PageWithMenu from './PageWithMenu.jsx';
import Editor from './Editor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSchedule: true,
      schedule: [
        {text: 'Doing cool things with code'}
      ]
    };

    this.onItemSelected = this.onItemSelected.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const schedule = this.state.schedule;

    return (
      <AppCanvas className='app'>
        <AppBar
          title='Confboard' />

        <PageWithMenu
          menuItems={schedule}
          onChange={this.onItemSelected}>

          <Editor title='Doing cool things with code' />

        </PageWithMenu>
      </AppCanvas>
    );
  }

  onItemSelected(e, value) {
    console.log('item selected', value);
  }
}

App.contextTypes = {
  router: React.PropTypes.func
};

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
