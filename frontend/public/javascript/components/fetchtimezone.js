import { locationCard } from './locationcard.js'

const serverTimeDiv = document.getElementById('server-time');

const serverTimeZone = (city, timeZone, date) => {
  const serverTime = date.toLocaleString('en-GB', { timeZone:`${timeZone}` });
  locationCard(city, serverTime, serverTimeDiv);
};

const fetchServerTimeZone = (date) => {
  fetch("/api/timezones")
    .then(response => response.json())
    .then((data) => {
      serverTimeZone(data.city, data.timeZone, date);
    });
};

export { fetchServerTimeZone, serverTimeZone }
