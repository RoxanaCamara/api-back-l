const { sucursales, listTerminales } = require("../helper/db");

const getSucursales = async (req, res = response) => {
  res.json({ sucursales });
};

const getTerminales = async (req, res = response) => {
  const { sucursal } = req.params;
  const terminales =
    listTerminales.find((e) => e.origenOrganizacionId === sucursal) || [];

  res.json(listTerminales);
};

module.exports = { getSucursales, getTerminales };
