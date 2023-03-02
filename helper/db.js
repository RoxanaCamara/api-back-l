const FECHA = new Date(
  new Date().setDate(new Date().getDate() - 3)
).toISOString();

const users = [
  {
    legajo: "Roxana",
    clave: "Gal12345",
    id: 1,
  },
  {
    legajo: "Narela",
    clave: "Gal12345",
    id: 2,
  },
  {
    legajo: "Camara",
    clave: "Gal12345",
    id: 3,
  },
  {
    legajo: "L10001211",
    clave: "Mvpcurt011",
    id: 4,
  },
  {
    legajo: "L1001376",
    clave: "Mvpcurt123",
    id: 5,
  },
];

const sucursales = ["001", "002", "003"];

const listTerminales = [
  {
    origenOrganizacionId: "081",
    origenTerminal: "515",
    kioscoId: "081515",
  },
  {
    origenOrganizacionId: "081",
    origenTerminal: "512",
    kioscoId: "081512",
  },
  {
    origenOrganizacionId: "081",
    origenTerminal: "513",
    kioscoId: "081513",
  },
  {
    origenOrganizacionId: "081",
    origenTerminal: "505",
    kioscoId: "708505",
  },
  {
    origenOrganizacionId: "081",
    origenTerminal: "505",
    kioscoId: "081505",
  },
];

const estadosFuncionamiento = {
  OK: "Funcionamiento OK",
  ERROR: "Error",
  FUERA_DE_SERVICIO: "Fuera de servicio",
};

const tiposDeBalanceos = {
  CONFORME: "Conforme",
  DIFERENCIA: "Con diferencia",
};

const resumen = (
  iniciadas,
  ok,
  error,
  retenidas,
  dudosas,
  pendientes,
  anuladas,
  canceladas
) => {
  return {
    iniciadas,
    ok,
    error,
    retenidas,
    dudosas,
    pendientes,
    anuladas,
    canceladas,
  };
};

const modulos = [
  {
    nombre: "Aceptador",
    funcionamiento: true,
    lista: [
      {
        nombre: 100,
        porcentaje: 20,
      },
      {
        nombre: 500,
        porcentaje: 90,
      },
    ],
  },
  {
    nombre: "Reciclador",
    funcionamiento: false,
    lista: [
      {
        nombre: 100,
        porcentaje: 20,
      },
    ],
  },

  {
    nombre: "Cheques",
    funcionamiento: false,
    lista: [
      {
        nombre: "Aceptados",
        porcentaje: 90,
      },
      {
        nombre: "Dispensados",
        porcentaje: 20,
      },
    ],
  },

  {
    nombre: "Dispensador",
    funcionamiento: true,
    lista: [
      {
        nombre: "Aceptados",
        porcentaje: 90,
      },
      {
        nombre: "Dispensados",
        porcentaje: 20,
      },
    ],
  },
];

const equipo1 = {
  idOperacion: 2345,
  sucursal: "001",
  nroProducto: 123,
  cliente: 23232002302,
  subEstado: "error",

  terminal: 502,
  nombre: "Equipo 501 - GBRU",
  saldo: { moneda: "ARS", monto: 1200000 },
  fechaHora: FECHA,
  version: "Softy 1.2",
  reinicio: "2022-10-03T16:20:17.713",
  tipoDeBalanceo: tiposDeBalanceos.DIFERENCIA,
  sobrante: "ARS 304.000",
  estadoHardware: estadosFuncionamiento.OK,
  resumen: resumen(12, 12, 12, 12, 12, 12, 12, 12, 12),
  modulos,
};

const equipo2 = {
  sucursal: "002",
  nroProducto: 456,
  terminal: 502,
  nombre: "Equipo 501 - GBRU",
  saldo: { moneda: "ARS", monto: 1200000 },
  fechaHora: FECHA,
  version: "Softy 1.2",
  reinicio: "2022-10-03T16:20:17.713",
  tipoDeBalanceo: tiposDeBalanceos.DIFERENCIA,
  sobrante: "ARS 304.000",
  estadoHardware: estadosFuncionamiento.OK,
  resumen: resumen(12, 12, 12, 12, 12, 12, 12, 12, 12),
  modulos,
};

const equipo3 = {
  sucursal: "003",
  nroProducto: 789,
  terminal: 502,
  nombre: "Equipo 501 - GBRU",
  saldo: { moneda: "ARS", monto: 1200000 },
  fechaHora: FECHA,
  version: "Softy 1.2",
  reinicio: "2022-10-03T16:20:17.713",
  tipoDeBalanceo: tiposDeBalanceos.DIFERENCIA,
  sobrante: "ARS 304.000",
  estadoHardware: estadosFuncionamiento.OK,
  resumen: resumen(12, 12, 12, 12, 12, 12, 12, 12, 12),
  modulos,
};
const equipos = [equipo1, equipo2, equipo3];

const search = [
  {
    idOperacion: 666,
    nroProducto: 666,
    cliente: 23232002302,
    subEstado: "error",
    estado: "ok",
    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "Extracción",
    monto: { saldo: 20000000, moneda: "ARS" },
  },
  {
    idOperacion: 2345,
    nroProducto: 123,
    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "Depósito de efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "ok",
    cliente: 23232002302,
    subEstado: "error",
  },
  {
    idOperacion: 2345,
    nroProducto: 123,
    cliente: 23232002302,
    subEstado: "error",

    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "Depósito de efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "error",
  },
  {
    idOperacion: 2345,
    nroProducto: 123,
    cliente: 23232002302,
    subEstado: "error",

    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "Depósito de efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "dudosas",
  },
  {
    idOperacion: 2345,
    nroProducto: 123,
    cliente: 23232002302,
    subEstado: "error",

    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "Depósito de efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "pendientes",
  },
  {
    idOperacion: 2345,
    nroProducto: 123,
    cliente: 23232002302,
    subEstado: "pendientes",

    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "Depósito de efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "anuladas",
  },
  {
    idOperacion: 2345,
    nroProducto: 456,
    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "CIG efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "canceladas",
  },
  {
    idOperacion: 2345,
    nroProducto: 789,
    terminal: "100",
    sucursal: "001",
    fechaHora: FECHA,
    tipoDeOperacion: "CIG efectivo",
    monto: { saldo: 20000000, moneda: "ARS" },
    estado: "retenidas",
  },
];

const comprobante = {
  kioscoId: "355500",
  idOperacionImputada: "035505002301120001617",
  idOperacionTas: 1612,
  fechaHora: "2023-01-12T12:04:17",
  tipoOperacion: "DepositoOnline",
  text: "\n              BANCO GALICIA   \n\n   Fecha           Hora        Terminal\n12/01/2023       12:04:17         500\n\nSucursal : 355 - RECTA MARTINOLLI\n        RECTA MARTINOLLI 6377\n\n\n          DEPOSITO EN EFECTIVO\n\nDeposito en CC$ 0003360-X XX5/4  \n\nTitular LYP CONSTRUCCIONES SAS \n\nImporte                      $ 33.000,00\n\nNro Operacion      035505002301120001617\n\n        Deposito confirmado\n            ** S.E.U.O **\n    COM.A 5943 BCRA CIRC OPASI 2-490\n\nf337d587-bc7b-43f5-94ea-0ccd1bd0ddbc\n\t",
  image: null,
  visible: true,
};

module.exports = {
  users,
  sucursales,
  equipos,
  search,
  listTerminales,
  comprobante,
};
