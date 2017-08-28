import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';
import { ROOT_URL } from '../constants/ApiUrl';

export function fetchWeather() {
  return dispatch => {
    dispatch(requestWeather());

    return fetch(`${ROOT_URL}&q=London,GB`)
      .then(response => response.json())
      .then(json => formatWeatherJson(json))
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

/*
Format retrieved weather json in order to match the designed
application state (city, current weather and next five days weather).
*/
function formatWeatherJson(json) {
  let initialValue = {
    location: json.city,
    current: json.list[0],
    days: []
  };

  return json.list.reduce((obj, item) => {
    let date = new Date(item.dt_txt);
    if (!obj.days.length) {
      obj.days.push({ date, list: [item] });
    } else {
      obj.days[obj.days.length - 1].date.getDay() === date.getDay()
        ? obj.days[obj.days.length - 1].list.push(item)
        : obj.days.push({ date, list: [item] });
    }
    return obj;
  }, initialValue);
}
