import './stylesheets/main.css';
import 'array.prototype.findindex';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App.jsx';

main();

function main() {
  persist(alt, storage, 'app');
  injectTapEventPlugin();

  if (process.env.NODE_ENV === 'production') {
    React.render(<App />, document.getElementById('app'));
  } else {
    const app = document.createElement('div');

    document.body.appendChild(app);

    React.render(<App />, app);
  }
}
