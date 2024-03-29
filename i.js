"use strict";
const express = require("express");
const Unblocker = require("unblocker");
const app = express();
const unblocker = Unblocker({prefix: '/proxy/', encoding: 'xor'});
app.use(unblocker);
app.get("/", (req, res) =>{
  res.sendFile(__dirname + '/index.html')
});
const port = process.env.PORT || 8080;
app.listen(port).on("upgrade", unblocker.onUpgrade);
console.log(`portable live at http://localhost:${port}/`);
