const moment = require('moment');
const db = require('../models');
const Record = db.Record;

exports.createRecord = async (req, res, next) => {
  try {
    const { name, category, date, amount, merchant } = req.body;
    await Record.create({ name, category, date, amount, merchant });
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

exports.deleteRecord = async (req, res, next) => {
  await Record.destroy({ where: { id: req.params.id } });
  next();
};

exports.updateRecord = async (req, res, next) => {
  const record = await Record.findByPk(req.params.id);
  const { name, category, date, amount, merchant } = req.body;
  await record.update({ name, category, date, amount, merchant });
  next();
};
