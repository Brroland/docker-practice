const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/user', (req, res) => {
  console.log(req.method, req.path);
  res.json([
    {
      email: 'brroland2@gmail.com'
    },
    {
      email: 'epica@mailbox.hu'
    },
    {
      email: 'epicaa3@gmail.com'
    }
  ]);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
