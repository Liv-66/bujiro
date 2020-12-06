const passport = require('passport');
const db = require('../models');
const User = db.User;

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.getSignup = (req, res) => {
  res.render('signup');
};

exports.createUser = async (req, res) => {
  const { name, password } = req.body;
  await User.create({ name, password });
  req.flash('success_msg', '使用者建立成功！');
  res.redirect('/users/login');
};

exports.login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success_msg', '登出成功。');
  res.redirect('/users/login');
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  req.flash('warning_msg', '請先登入。');
  res.redirect('/users/login');
};
