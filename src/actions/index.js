import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';
import { ROOT_URL } from '../constants/ApiUrl';

export function fetchWeather() {
  return dispatch => {

    dispatch(requestWeather());

    return fetch(`${ROOT_URL}&q=London,US`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeatherSuccess(json)))
      .catch(() => dispatch(receiveWeatherError()))
  }
}

export function requestWeather() {
  return {
    type: types.REQUEST_WEATHER
  }
}

export function receiveWeatherSuccess(weather) {
  return {
    type: types.RECEIVE_WEATHER_SUCCESS,
    weather
  }
}

export function receiveWeatherError() {
  return {
    type: types.RECEIVE_WEATHER_ERROR
  }
}
