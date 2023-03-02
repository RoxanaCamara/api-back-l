const { Router } = require("express");
const { getEquipos, getEquipo } = require("../controllers/equipos");
const { validarJWT } = require("../helper/utils");

const router = Router();

router.get("/equipos/:sucursal", [validarJWT], getEquipos);

router.get("/equipo/:nroProducto", [validarJWT], getEquipo);

module.exports = router;
