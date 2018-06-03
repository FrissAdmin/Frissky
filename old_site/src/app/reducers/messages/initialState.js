import Immutable from 'immutable';

export default Immutable.fromJS({
  channels       : [],
  currentChannel : null,
  isLoading      : false,
  lastReadTime   : 0,
  messages       : [],
});
