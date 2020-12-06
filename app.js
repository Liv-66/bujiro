const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const routes = require('./routes');
const passport = require('./config/passport');

const PORT = 3000;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: 'expense-tracher-session-secret',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  res.locals.delete_msg = req.flash('delete_msg');
  res.locals.user = req.user;
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`connect to http://localhost:${PORT}`);
});
