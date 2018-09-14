export const getDays = (month, year) => {
  // Month here is 1-indexed (January is 1, February is 2, etc). This is
  // because we're using 0 as the day so that it returns the last day
  // of the last month,  so we add +1 to the month number
  // so it returns the correct amount of days
  if (typeof month !== 'number' || typeof year !== 'number') {
    const date = new Date();
    month = date.getMonth();
    year = date.getFullYear();
  }
  return new Date(year, month + 1, 0).getDate();
};

export const getDaysArray = ({ month, year }) => {
  const days = getDays(month, year);
  const daysArray = [];
  let i = 1;
  for (i; i <= days; i += 1) {
    daysArray.push(i);
  }
  return daysArray;
};

export const getNewMonthFrom = (from, months = 0) => {
  const newInstance = new Date(from);
  newInstance.setMonth(newInstance.getMonth() + months);
  newInstance.setDate(1);
  return newInstance;
};

export const noHandler = message => () => console.log(message);

export const getCustomDateObject = (date = new Date()) => {
  return {
    day: date.getDay(),
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
};

const getCurrentTime = format => {
  const date = new Date();
  const tempHours = date.getHours();
  const hours = format === 12 && tempHours > 12 ? tempHours - 12 : tempHours;
  return {
    hours,
    minutes: date.getMinutes()
  };
};

export const getActualDate = (intDate = '', timeObj = {}, format = 12) => {
  const strDate = (intDate || '').toString();
  let hours, minutes, period;
  if (!strDate || strDate.length !== 8) {
    return {};
  }
  const year = parseInt(strDate.substring(0, 4), 10);
  const month = parseInt(strDate.substring(4, 6), 10);
  const date = parseInt(strDate.substring(6, 8), 10);

  const newDate = new Date(year, month, date);

  if (!timeObj) {
    const time = getCurrentTime(format);
    hours = time.hours;
    minutes = time.minutes;
  } else if (typeof timeObj === 'object') {
    hours = timeObj.hours;
    minutes = timeObj.minutes;
    period = '' + timeObj.period;
    let dateHours = 0;
    // format date to 24 hours for date object
    if (period === 'PM') {
      dateHours = hours < 12 ? hours + 12 : hours;
    } else {
      dateHours = hours === 12 ? 0 : hours;
    }
    newDate.setHours(dateHours);
    newDate.setMinutes(minutes);
    // in custome date object add 0 prefix in hours and minutes if the number is single digit
    hours = timeObj.hours > 9 ? '' + timeObj.hours : '0' + timeObj.hours;
    minutes =
      timeObj.minutes > 9 ? '' + timeObj.minutes : '0' + timeObj.minutes;
  }
  return {
    dateObject: newDate,
    customObject: {
      minutes,
      hours,
      period,
      date,
      month,
      year,
      monthNameShort: monthsShort[month],
      monthNameFull: monthsFull[month]
    }
  };
};

export const dateToInt = date => {
  // make sure both month and day starts with 0 if single digit;
  const month = date.month < 10 ? '0' + date.month : date.month;
  const day = date.date < 10 ? '0' + date.date : date.date;
  return parseInt('' + date.year + month + day, 10);
};

export const monthsFull = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
export const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];
