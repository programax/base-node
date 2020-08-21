import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
  res.json({ data: 'hello world' });
});

app.listen(4000, () => {
  console.log('Server ready http://localhost:4000');
});
