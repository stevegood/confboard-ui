import uuid from 'node-uuid';
import alt from '../libs/alt';
import UserActions from '../actions/user-actions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.users = [];
  }

  // TODO: action bound functions go here
}

export default alt.createStore(UserStore, 'UserStore');
