import dayjs from 'dayjs';


export const formatMonthYear = (date) => {
  return dayjs(date).format('MMMM YYYY');
};


export const formatShortDate = (date) => {
  return dayjs(date).format('ddd, DD MMM');
};


export const formatTime = (time24h) => {
  return dayjs(time24h, 'HH:mm').format('hh:mm A');
};


export const isSameDay = (d1, d2) => {
  return dayjs(d1).isSame(dayjs(d2), 'day');
};


export const getNearestEvent = (events, referenceDate = dayjs()) => {
  return events
    .map(event => ({ ...event, parsedDate: dayjs(event.date) }))
    .filter(e => e.parsedDate.isSame(referenceDate, 'day') || e.parsedDate.isAfter(referenceDate))
    .sort((a, b) => a.parsedDate.diff(b.parsedDate))[0] || null;
};


export const isOverlapping = (a, b) => {
  return a.date === b.date &&
    ((a.startTime >= b.startTime && a.startTime < b.endTime) ||
     (a.endTime > b.startTime && a.endTime <= b.endTime));
};
