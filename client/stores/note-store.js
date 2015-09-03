import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/note-actions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [];
  }

  // TODO: action bound functions go here
}

export default alt.createStore(NoteStore, 'NoteStore');
