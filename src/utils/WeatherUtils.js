/*
  Gets the highest occurence of a weather condition, description or icon
  during a day since openweather API's just return conditions specific
  for a 3h span.
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

export function getDayDescription(forecasts) {
  // Build a map of conditions with number of occurences as value
  let map = forecasts.reduce((map, forecast) => {
    let condition = forecast.weather[0].description;
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

export function averageTemp(forecasts) {
  let temps = forecasts.map((forecast) => forecast.main.temp);
  return average(temps);
}

export function averagePressure(forecasts) {
  let temps = forecasts.map((forecast) => forecast.main.pressure);
  return average(temps);
}

export function averageHumidity(forecasts) {
  let temps = forecasts.map((forecast) => forecast.main.humidity);
  return average(temps);
}

export function averageClouds(forecasts) {
  let temps = forecasts.map((forecast) => forecast.clouds.all);
  return average(temps);
}

export function averageWindSpeed(forecasts) {
  let temps = forecasts.map((forecast) => forecast.wind.speed);
  return average(temps);
}

export function averages(forecasts) {
  return {
    temp: averageTemp(forecasts),
    humidity: averageHumidity(forecasts),
    pressure: averagePressure(forecasts),
    wind: averageWindSpeed(forecasts),
    clouds: averageClouds(forecasts)
  };
}

function average(arr) {
  let sum = arr.reduce((sum, item) => sum + item, 0);
  return Math.round(sum / arr.length);
}
