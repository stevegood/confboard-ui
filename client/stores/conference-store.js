import uuid from 'node-uuid';
import alt from '../libs/alt';
import ConferenceActions from '../actions/conference-actions';

class ConferenceStore {
  constructor() {
    this.bindActions(ConferenceActions);
    this.conferences = [];
  }

  // TODO: action bound functions go here
}

export default alt.createStore(ConferenceStore, 'ConferenceStore');
