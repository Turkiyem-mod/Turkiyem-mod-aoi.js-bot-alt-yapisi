var http = require('http');

  http.createServer(function (req, res) {
      res.write("Bot");
      res.end();
  }) .listen(8080)
