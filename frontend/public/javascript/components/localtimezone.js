import { locationCard } from './locationcard.js'

const browserTimeDiv = document.getElementById('browser-time');

const browserTimeZone = (date) => {
  const browserTime = date.toLocaleString('en-GB');
  locationCard("Current Location", browserTime, browserTimeDiv);
};

export { browserTimeZone }
