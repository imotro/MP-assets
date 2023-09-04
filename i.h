"use strict"; const express = require("express"); const Unblocker = require("unblocker"); const app = express(); const unblocker = Unblocker({ prefix: '/proxy/' }); app.use(unblocker); app.get("/", (req, res) => res.sendFile(__dirname + '/index.html') ); // start the server and allow unblocker to proxy websockets: const port = process.env.PORT || 8080; app.listen(port).on("upgrade", unblocker.onUpgrade); // or // const http = require("http"); // const server = http.createServer(app); // server.listen(port); // server.on("upgrade", unblocker.onUpgrade); console.log(`unblocker app live at http://localhost:${port}/`);