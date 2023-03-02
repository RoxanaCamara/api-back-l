const { Router } = require("express");
const { login } = require("../controllers/auth");

const router = Router();

router.post("/v1/bfft/security/login/login-supervisor", login);

module.exports = router;
