const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/events', (req, res) => {
  const events = [
    {
      title: 'Post to Facebook',
      start: new Date(2025, 8, 14, 10, 0, 0),
      end: new Date(2025, 8, 14, 10, 30, 0),
    },
    {
      title: 'Tweet about new feature',
      start: new Date(2025, 8, 15, 11, 0, 0),
      end: new Date(2025, 8, 15, 11, 15, 0),
    },
  ];
  res.json(events);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});