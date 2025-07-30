var express = require('express');
var app = express();

var port = 8080;

app.use(express.static('frontend')); // Serve static files from the 'frontend' directory

app.listen(port, function() {
    console.log('Server is running on http://localhost:' + port);
});

