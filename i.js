"use strict"; const express = require("express"); const Unblocker = require("unblocker"); const app = express(); 
const unblocker = Unblocker({
prefix: "/proxy/"
}); 
app.use(unblocker);
app.get("/", (req, res) => res.sendFile(__dirname + '/index.html') ); 
