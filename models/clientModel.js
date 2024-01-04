const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    usuario: {
      type: String,
      required: true,
      unique: true
    },
    ciudad: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cliente = mongoose.model("cliente", clienteSchema, "clientes");

module.exports = Cliente;
