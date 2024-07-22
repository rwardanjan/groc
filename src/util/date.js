// util/date.js
export const getWeekDates = () => {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date);
  }

  return days;
};
