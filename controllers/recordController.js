const db = require('../models');
const Record = db.Record;

exports.createRecord = async (req, res) => {
  try {
    const { name, category, date, amount, merchant } = req.body;
    await Record.create({ name, category, date, amount, merchant });
  } catch (err) {
    console.log(err);
  }
};
