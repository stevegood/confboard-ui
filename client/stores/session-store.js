import uuid from 'node-uuid';
import alt from '../libs/alt';
import SessionActions from '../actions/session-actions';

class SessionStore {
  constructor() {
    this.bindActions(SessionActions);
    this.sessions = [];
  }

  // TODO: action bound functions go here
}

export default alt.createStore(SessionStore, 'SessionStore');
