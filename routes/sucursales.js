const { Router } = require("express");
const { getSucursales, getTerminales } = require("../controllers/sucursales");
const { validarJWT } = require("../helper/utils");

const router = Router();

router.get("/", [validarJWT], getSucursales);

router.get("/:sucursal/terminales", [validarJWT], getTerminales);

module.exports = router;
