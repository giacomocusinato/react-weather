/*
  Maps open weather icons to Skycons
*/
export function getSkycon(icon) {
  switch(icon) {
    case '01d':
      return 'CLEAR_DAY';
    case '01n':
      return 'CLEAR_NIGHT';
    case '02d':
      return 'PARTLY_CLOUDY_DAY';
    case '02n':
      return 'PARTLY_CLOUDY_NIGHT';
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return 'CLOUDY';
    case '09d':
    case '09n':
    case '10d':
    case '10n':
    case '11d':
    case '11n':
      return 'RAIN';
    case '50d':
    case '50n':
      return 'FOG';
    default:
      return 'CLOUDY';
  }
}
