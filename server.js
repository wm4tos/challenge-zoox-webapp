const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const path = require('path');
const PORT = process.env.PORT || 80;

const app = express();

app.use(history());
app.use(serveStatic(__dirname + path.join('dist', 'spa')));
app.listen(PORT);
