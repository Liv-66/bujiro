const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const routes = require('./routes');

const PORT = 3000;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

app.engine('hbs', handlebars({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

app.use(routes);

app.listen(PORT, () => {
  console.log(`connect to http://localhost:${PORT}`);
});
