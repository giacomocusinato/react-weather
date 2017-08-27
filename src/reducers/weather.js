import * as types from '../constants/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      return state;
    case types.RECEIVE_WEATHER_SUCCESS:
      return state;
    case types.RECEIVE_WEATHER_ERROR:
      return state;
    default:
      return state;
  }
};
