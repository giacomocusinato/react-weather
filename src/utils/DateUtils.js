const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

/*
  Gets the full text of a week day from an ISO Date.
*/
export function getWeekDay(isoDate) {
  let day = new Date(isoDate).getDay();
  return day === new Date().getDay() ? 'Today' : WEEK_DAYS[day];
}
