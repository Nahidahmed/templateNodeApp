const express = require('express');
const path = require('path');

const app = express();

const port = 3030;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Example of ejs rendering
app.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Hello Template Node, Express App!' });
});

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
