const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

/*
  Gets the full text of a week day from an ISO Date.
*/
export function getWeekDay(isoDate) {
  return WEEK_DAYS[new Date(isoDate).getDay()];
}
