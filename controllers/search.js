const { search, comprobante } = require("../helper/db");
const { operaciones } = require("../helper/operaciones");

const getSearch = async (req, res = response) => {
  let body = res.body;
  res.json([...operaciones]);
};

const getComprobante = async (req, res = response) => {
  res.json({ comprobante });
};

module.exports = { getSearch, getComprobante };
