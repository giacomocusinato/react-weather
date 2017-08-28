const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export function getWeekDay(isoDate) {
  return WEEK_DAYS[new Date(isoDate).getDay()];
}
