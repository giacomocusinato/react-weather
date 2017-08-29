/*
  Gets the highest occurence of a weather condition during a day
  since openweather API's just return conditions specific for a 3h span.
*/
export function getDayCondition(forecasts) {
  // Build a map of conditions with number of occurences as value
  let map = forecasts.reduce((map, forecast) => {
    let condition = forecast.weather[0].main;
    map[condition] = (map[condition] || 0) + 1;
    return map;
  }, {});

  // Get the condition with the highest occurence
  return Object.keys(map).reduce((max, condition) =>
    map[condition] > map[max] ? condition : max);
}

export function getDayIcon(forecasts) {
  // Build a map of icons with number of occurences as value
  let map = forecasts.reduce((map, forecast) => {
    let icon = forecast.weather[0].icon;
    map[icon] = (map[icon] || 0) + 1;
    return map;
  }, {});

  // Get the icon with the highest occurence
  return Object.keys(map).reduce((max, icon) =>
    map[icon] > map[max] ? icon : max);
}

export function averageMaxTemp(forecasts) {
  let maxTemps = forecasts.map((forecast) => forecast.main.temp_max);
  return average(maxTemps);
}

export function averageMinTemp(forecasts) {
  let minTemps = forecasts.map((forecast) => forecast.main.temp_min);
  return average(minTemps);
}

export function averageTemp(forecasts) {
  let temps = forecasts.map((forecast) => forecast.main.temp);
  return average(temps);
}

export function averages(forecasts) {
  return {
    minTemp: averageMinTemp(forecasts),
    maxTemp: averageMaxTemp(forecasts),
    temp: averageTemp(forecasts),
  };
}

function average(arr) {
  let sum = arr.reduce((sum, item) => sum + item, 0);
  return Math.round(sum / arr.length);
}
