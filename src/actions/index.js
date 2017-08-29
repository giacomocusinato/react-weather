import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';
import { getCompleteUrl, formatJson } from '../utils/ApiUtils';


export function fetchWeather(location) {
  return dispatch => {
    dispatch(requestWeather());

    return fetch(getCompleteUrl(location))
      .then(response => response.json())
      .then(json => formatJson(json))
      .then(weatherObj => {
        dispatch(receiveWeatherSuccess(weatherObj));
      })
      .catch(err => {
        console.log(err);
        dispatch(receiveWeatherError());
      });
  };
}

export function requestWeather() {
  return { type: types.REQUEST_WEATHER };
}

export function receiveWeatherSuccess(weather) {
  return { type: types.RECEIVE_WEATHER_SUCCESS, weather };
}

export function receiveWeatherError() {
  return { type: types.RECEIVE_WEATHER_ERROR };
}
