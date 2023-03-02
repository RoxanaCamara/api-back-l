const { equipos } = require("../helper/db");

const getEquipos = async (req, res = response) => {
  const { sucursal } = req.params;
  const equiposDeSucursal = equipos.filter((e) => e.sucursal === sucursal);
  res.json({ equipos: equiposDeSucursal });
};

const getEquipo = async (req, res = response) => {
  const { nroProducto } = req.params;
  const equipo = equipos.find((e) => e.nroProducto.toString() === nroProducto);
  console.log("🚀 ~ file: equipo.js:6 ~ getEquipo ~ equipo", equipo);
  res.json({ equipo });
};

module.exports = { getEquipos, getEquipo };
