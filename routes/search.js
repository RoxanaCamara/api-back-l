const { Router } = require("express");
const { getSearch, getComprobante } = require("../controllers/search");
const { validarJWT } = require("../helper/utils");

const router = Router();

router.post("/", [validarJWT], getSearch);

router.get("/comprobante/:idOperacion", [validarJWT], getComprobante);

module.exports = router;
