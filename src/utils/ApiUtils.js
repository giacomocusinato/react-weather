import { ROOT_URL } from '../constants/ApiUrl';

/*
  Get appropriate url depending weather location is
  a coordinates object or a city string.
*/
export function getCompleteUrl(location) {
  return location.lat ?
    `${ROOT_URL}&lat=${location.lat}&lon=${location.lon}` :
    `${ROOT_URL}&q=${location}`;
}
