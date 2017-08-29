import { ROOT_URL } from '../constants/ApiUrl';

/*
  Get the appropriate url depending on the location object.
*/
export function getCompleteUrl(location) {
  return location.lat ?
    `${ROOT_URL}&lat=${location.lat}&lon=${location.lon}` :
    `${ROOT_URL}&q=${location}`;
}

/*
  Format retrieved weather json in order to match the designed
  application state (city, current weather and next five days weather).
*/
export function formatJson(json) {
  let initialValue = {
    location: json.city,
    current: json.list[0],
    days: []
  };

  return json.list.reduce((obj, item) => {
    let date = new Date(item.dt*1000);
    if (!obj.days.length) {
      obj.days.push({ date, forecasts: [item] });
    } else {
      obj.days[obj.days.length - 1].date.getDay() === date.getDay()
        ? obj.days[obj.days.length - 1].forecasts.push(item)
        : obj.days.push({ date, forecasts: [item] });
    }
    return obj;
  }, initialValue);
}
