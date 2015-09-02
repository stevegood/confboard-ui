'use strict';

import 'styles/main.scss';

import React from 'react/addons';
import Application from './components/application.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

React.render(<Application />, document.body);
