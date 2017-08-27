import 'whatwg-fetch';
import * as types from '../constants/ActionTypes';
import { ROOT_URL } from '../constants/ApiUrl';

export function fetchWeather() {
  return dispatch => {
    dispatch(requestWeather());

    return fetch(`${ROOT_URL}&q=London,GB`)
      .then(response => response.json())
      .then(json => {
        /*
        Format json to the designen application state, eg:

        {
          city: 'London, UK',
          current: {
            // Api weather object for current hour (first item)
          }
          days: [
            date: date
            weather: [ // Api weather object list for given date ]
          ]
        }
        */

        let initialValue = {
          city: json.city,
          current: json.list[0],
          days: []
        };

        let weatherObject = json.list.reduce((obj, item) => {
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

        dispatch(receiveWeatherSuccess(weatherObject));
      })
      .catch((err) => {
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
