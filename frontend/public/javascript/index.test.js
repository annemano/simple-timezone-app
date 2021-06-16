require('./components/locationcard.js')

test('Check if browser card is updated with browser time', () => {
  const browserTimeDiv = document.getElementById('browser-time');
  const date = new Date();
  locationCard('Current Location, date, browserTimeDiv');
  expect(browserTimeDiv.innerHTML).toBe(`<div><h2>Current Location</h2><p>${date}</p></div>`);
});
