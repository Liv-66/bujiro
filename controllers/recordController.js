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

exports.getRecords = async (req, res, next) => {
  try {
    const records = await Record.findAll({ raw: true });
    res.json(records);
  } catch (err) {
    console.log(err);
  }
  next();
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
