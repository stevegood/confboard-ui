import React from 'react/addons';
import mui from 'material-ui';
import {AppBar, AppCanvas} from 'material-ui';
import PageWithMenu from './PageWithMenu.jsx';
import Editor from './Editor.jsx';

const ThemeManager = mui.Styles.ThemeManager();

class Application extends React.Component {
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
    }
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
    )
  }

  onItemSelected(e, value) {
    console.log('item selected', value);
  }
}

Application.contextTypes = {
  router: React.PropTypes.func
};

Application.childContextTypes = {
  muiTheme : React.PropTypes.object
};

export default Application;
