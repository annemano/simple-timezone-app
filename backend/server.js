const express = require ('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, "..", "frontend", "public")));

app.get('/', (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "frontend", "index.html"));
});

app.get('/api/timezones', (_req, res) => {
  res.json( { city: 'Tokyo', timeZone: 'Japan' } );
});

module.exports = app;
