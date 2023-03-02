Consultas.
Verificar si esos son los datos.


---- MOVIMIENTOS----

mov. Ingresos:
por cada un ingreso, es una operacionesDetalles. 
El numero de ingreso es la cantidad de ingresos,
estaria ordenando del ingreso mas viejo al ingeso mas nuevo.
monto total imputado es la suma de todos los totales de cada ingreso, 
es decir suma de todos los montoProductoOrigen

mov. Cartuchos:

Supuestamente en operaciones no trae esta informacion.

const operations = {
  data: [
    {
      sucursal: "string", --ver detalle
      terminal: "string", --en la tabla, en ver detalle
      kioscoId: "string",
      fecha: "string",   --en la tabla, en ver detalle
      hora: "string",  --en la tabla, en ver detalle
      idOperacion: "string", -- en la tabla
      idOperacionAnterior: "string",
      idOperacionAnulada: "string",
      tipoOperacion: "string", -- en la tabla, en ver detalle
      moneda: "string",
      monto: 0, --- en la tabla , en ver detalle
      medioPago: "string",
      estado: "string", --en la tabla, en ver detalle
      clienteId: "string", ---ver detalle 
      tipoProducto: "string",
      productoId: "string", --en la tabla , en ver detalle
      identificacionTercero: "string",
      procesamiento: "string",
      balanceado: true,
      fechaHoraBalanceo: "2023-02-22T15:06:45.778Z", 
      nroBalanceo: "string",
      estadoActualizacionLimite: "string",
      interTipo: "string",
      replicadoEtas: 0,
      fechaHoraReplicadoEtas: "2023-02-22T15:06:45.778Z",
      contabilizado: true,
      inicioOperacion: "2023-02-22T15:06:45.778Z",
      finOperacion: "2023-02-22T15:06:45.778Z",
      metodoAuth: "string",
      mfa: "string",
      qr: "string",
      tipoLogin: "string",
      modulo: "string",
      aux: "string",
      numeroDocumento: "string",
      adhesionId: "string",
      registradoBT: "string",
      subEstado: "string", -- en ver detalle
      sessionId: "string",
      operacionesDetalles: [
        {
          fechaHora: "2023-02-22T15:06:45.778Z",
          tipoProductoOrigen: "string",
          idProductoOrigen: "string",
          monedaProductoOrigen: "string", -- mov. Ingresos (para saber si va a ser ARS, USD, etc)
          montoProductoOrigen: 0, -- mov. Ingresos
          tipoProductoDestino: "string",
          idProductoDestino: "string",
          monedaProductoDestino: "string", 
          montoProductoDestino: 0,
          cierreDeCambio: 0,
          medioPago: "string",
          estado: "string", -- mov. Ingresos
          cantidadBilletes: 0, --- mov. Ingresos
          chequeTipoBoleta: "string",
          chequeIdBoleta: "string",
          chequesMontoTotal: 0,
          chequesCantidad: 0,
          cmc7: "string",
          rutaImagenFrente: "string",
          rutaImagenDorso: "string",
          subEstado: "string",
          paso: "string",
          kioscoId: "string",
          idOperacion: "string",
          tipoOperacion: "string",
          id: 0,
          operacion: 0,
          movimiento: "string",
        },
      ],
      id: 0,
      operacionTASIPK: 0,
      retryCountReplicado: 0,
    },
  ],
};
