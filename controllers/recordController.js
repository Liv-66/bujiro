const moment = require('moment');
const db = require('../models');
const Record = db.Record;

exports.createRecord = async (req, res, next) => {
  try {
    const { name, category, date, amount, merchant } = req.body;
    await Record.create({ name, category, date, amount, merchant });
    req.flash('success_msg', '新增成功！');
    res.redirect('back');
  } catch (err) {
    console.log(err);
  }
  next();
};

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.findAll({ raw: true });
    let total = 0;
    records.forEach((el) => {
      total = total + parseFloat(el.amount);
      const formatDate = moment(el.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
      el.date = formatDate;
    });
    res.render('homepage', { records, total });
  } catch (err) {
    console.log(err);
  }
};

exports.getRecordsByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const records = await Record.findAll({ raw: true, where: { category } });
    let total = 0;
    records.forEach((el) => {
      total = total + parseFloat(el.amount);
      const formatDate = moment(el.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
      el.date = formatDate;
    });
    res.render('category', { category, records, total });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteRecord = async (req, res) => {
  await Record.destroy({ where: { id: req.params.id } });
  req.flash('success_msg', '刪除成功。');
  res.redirect('back');
};

exports.getUpdateRecord = async (req, res) => {
  const record = await Record.findByPk(req.params.id);
  const formatDate = moment(record.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  res.render('update', { record: record.toJSON(), formatDate });
};

exports.updateRecord = async (req, res, next) => {
  const record = await Record.findByPk(req.params.id);
  await record.update(req.body);
  res.redirect('/');
};
