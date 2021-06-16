
const express = require ('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, "..", "frontend", "public")));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "frontend", "index.html"));
});

app.get('/api/timezones', (req, res) => {
  res.send( { city: 'Tokyo', timeZone: 'Japan' } );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`We are live on ${port}`));
