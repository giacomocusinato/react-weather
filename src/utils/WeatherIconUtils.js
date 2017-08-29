/*
  Maps open weather icons to Skycons
*/
export function getSkycon(icon, isDayIcon = false) {
  switch(icon) {
    case '01d':
      return 'CLEAR_DAY';
    case '01n':
      return isDayIcon ? 'CLEAR_DAY' : 'CLEAR_NIGHT';
    case '02d':
      return 'PARTLY_CLOUDY_DAY';
    case '02n':
      return isDayIcon ? 'PARTLY_CLOUDY_DAY' : 'PARTLY_CLOUDY_NIGHT';
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
