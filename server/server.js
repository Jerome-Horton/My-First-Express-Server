console.log('First Server Creation');

// Load the express library from mode_modules/express:
const express = require('express');

// Create  a variable called "app." This variable is our server.
const app = express(); // That uses the express library to create my server.

// Tell express where to find our "public" files.
    // aka "the client-side" files
    // aka "static" assets"
    // aka "all the stuff we've been happily doing already"
app.use(express.static('./server/public'));

app.listen(5000, function() {
    console.log('Your first express server is running!');
});