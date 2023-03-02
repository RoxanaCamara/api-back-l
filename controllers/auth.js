const { users } = require("../helper/db");
const { generarJWT } = require("../helper/utils");
const bcrypt = require("bcrypt");

const login = async (req, res = response) => {
  try {
    const { legajo, clave } = req.body;
    const user = users.find((e) => e.legajo === legajo);

    if (!user) {
      return res.status(403).json({ msg: "User or password invalid" });
    }

    const validPassword = user.clave === clave;

    if (!validPassword) {
      return res.status(403).json({ msg: "Password invalid" });
    }
    const token = await generarJWT(user.id);

    res.json({ data: [token], user });
  } catch (error) {
    res.status(500).json({ msg: "Comunicate Suport" });
  }
};

module.exports = { login };
