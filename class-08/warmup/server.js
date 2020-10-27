'use strict';
const express = require('express');
const app = express();

app.get('/username', (req, res) => {
  const userInfo = {};
  userInfo.name=req.query.username;
  userInfo.password=req.query.password;
  res.sendFile('index.html');
})
app.listen(3000, () => console.log("Listening on Port 3000"));