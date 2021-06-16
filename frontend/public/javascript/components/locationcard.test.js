import { locationCard } from './locationcard.js';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import MockDate from 'mockdate'

test('Check if browser card is updated with browser time', () => {
  const dom = new JSDOM(`<div id="browser-time"</div>`);
  const browserTimeDiv = dom.window.document.getElementById('browser-time');
  const time = new Date();
  locationCard("Current Location", time, browserTimeDiv);
  expect(browserTimeDiv.innerHTML).toBe(
    `<div>
      <h2>Current Location</h2>
      <p>${time}</p>
    </div>`);
});

test('Check if time returned by locationCard fits the right format', () => {
  const dom = new JSDOM(`<div id="server-time"</div>`);
  const serverTimeDiv = dom.window.document.getElementById('server-time');
  MockDate.set('2021-06-16');
  const time = new Date();
  const serverTime = time.toLocaleString('en-GB', { timeZone: 'Japan' });
  locationCard("Tokyo", serverTime, serverTimeDiv);
  expect(serverTimeDiv.innerHTML).toBe(
    `<div>
      <h2>Tokyo</h2>
      <p>16/06/2021, 09:00:00</p>
    </div>`);
});

