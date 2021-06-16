const serverTimeDiv = document.getElementById('server-time');
const browserTimeDiv = document.getElementById('browser-time');

const serverTimeZone = (city, timeZone, date) => {
  const serverTime = date.toLocaleString('en-GB', { timeZone:`${timeZone}` });
  serverTimeDiv.innerHTML = `
    <div>
      <h2>${city}</h2>
      <p>${serverTime}</p>
    </div>`;
};

const fetchServerTimeZone = (date) => {
  fetch("/api/timezones")
    .then(response => response.json())
    .then((data) => {
      serverTimeZone(data.city, data.timeZone, date);
    });
};

const browserTimeZone = (date) => {
  const browserTime = date.toLocaleString('en-GB');
  browserTimeDiv.innerHTML = `
    <div>
      <h2>Current Location</h2>
      <p>${browserTime}</p>
    </div>`;
};

export { browserTimeZone, fetchServerTimeZone }
