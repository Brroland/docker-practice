const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  console.log(req.method, req.path);
  res.json({
    alive: true
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
// modosítottam
