const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { users } = require("./db");
const { validationResult } = require("express-validator");

const generarJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      "process.env.SECRETKEY",
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

const comprobarJWT = async (token = "") => {
  try {
    if (token < 10) {
      return null;
    }
    const { uid } = jwt.verify(token, "process.env.SECRETKEY");
    const usuario = null; //await User.findById(uid);

    if (usuario) {
      return usuario;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const validarJWT = async (req = request, res = response, next) => {
  let token = req.header("authorization");

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    token = token.replace("Bearer ", "");
    const { uid } = jwt.verify(token, "process.env.SECRETKEY");

    // leer el usuario que corresponde al id
    const usuario = users.find((e) => e.id === uid);

    if (!usuario) {
      return res.status(401).json({
        msg: "Token no válido - usuario no existe DB",
      });
    }

    req.user = usuario;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Token no válido",
    });
  }
};

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(404).json(errors);
  }
  next();
};

const handleFilter = (elemento, filtro) => {
  let init = false;
  return Object.keys(filtro).reduce((e) => {
    init = init && elemento[e] === filtro[e];
  }, init);
};

const handleFilterHorario = (horario, esMayor, esMenor) => {
  return horario < esMayor && horario > esMenor;
};

module.exports = {
  generarJWT,
  comprobarJWT,
  validarJWT,
  validarCampos,
  handleFilter,
  handleFilterHorario,
};
