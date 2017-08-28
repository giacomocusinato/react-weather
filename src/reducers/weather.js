import * as types from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      return Object.assign({}, {
         isLoading: true,
       });
    case types.RECEIVE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
         data: action.weather,
         isLoading: false,
         hasErrored: false
       });
    case types.RECEIVE_WEATHER_ERROR:
      return Object.assign({}, {
         hasErrored: true,
       });
    default:
      return state;
  }
};
