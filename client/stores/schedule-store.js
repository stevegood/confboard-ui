import uuid from 'node-uuid';
import alt from '../libs/alt';
import ScheduleActions from '../actions/schedule-actions';

class ScheduleStore {
  constructor() {
    this.bindActions(ScheduleActions);

    this.schedules = [];
  }

  create(schedule) {
    const schedules = this.schedules;

    schedule.id = uuid.v4();

    this.setState({
      schedules: schedules.concat(schedule);
    });
  }
}

export default alt.createStore(ScheduleStore, 'ScheduleStore');
