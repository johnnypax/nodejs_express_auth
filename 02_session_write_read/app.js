const express = require('express');
const session = require('express-session');

const app = express();

//Take a look a the README.md for the explanation of this code fragment
app.use(session({
  secret: 'keep_your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // use "true" if you are under HTTPS
}));

app.get('/set-session', (req, res) => {
  req.session.username = 'GiovanniPace';
  req.session.role = 'ADMINISTRATOR';

  res.send('Session successfully set!');
});

app.get('/get-session', (req, res) => {
    if (req.session.username) {
        res.send(`Welcome, ${req.session.username} with the role ${req.session.role}!`);
    } else {
        res.send('No session found.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
