const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

const maxAgeCookie = 180 * 1000;      //Max age of the cookie in milliseconds (duration 180 sec)

// Use the Cookie parser middleware for managing cookies (not included by default)
app.use(cookieParser());

// Write cookie endpoint
app.get('/set-cookie', (req, res) => {
  res.cookie('Username', 'GiovanniPace', { maxAge: maxAgeCookie, httpOnly: true });
  res.send('Cookie set! Open the inspector on your browser, go to "Application" tab and look for "Cookies" for reading it.');
});

// Read cookie endpoint
app.get('/read-cookie', (req, res) => {
  let cookieVal = req.cookies.mioCookie;
  
  if (cookieVal) {
    res.send(`Cookie content "Username": ${cookieVal}`);
  } else {
    res.send('Cookie "Username" not found.');
  }
});

app.listen(port, () => {
  console.log(`Server listening on address http://localhost:${port}`);
});
