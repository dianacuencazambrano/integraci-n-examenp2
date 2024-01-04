const express = require('express');
const router = express.Router();
const Cliente = require('../models/clientModel.js');
const GeoInfoRecord = require('../models/geoInfoRecordModel.js');
const geoController = require('./geoController.js');

router.get('/datos/:usuario', async (req, res) => {
  try {
    const usuario = req.params.usuario;
    const cliente = await Cliente.findOne({ usuario });

    if (!cliente) {
      return res.status(404).json({ error: 'Cliente no encontrado para el username: ' + usuario});
    }

    const existingRecord = await GeoInfoRecord.findOne({ ciudad: cliente.ciudad });

    if (existingRecord) {
      return res.status(400).json({ error: 'La ciudad ya está registrada en la BD', data: existingRecord });
    }
    
    const geoInfo = await geoController.getGeoInfo(cliente.ciudad);
    const geoInfoRecord = new GeoInfoRecord({
        username: cliente.usuario,
        ciudad: cliente.ciudad,
        ...geoInfo,
    });
    await geoInfoRecord.save();

    res.json(geoInfoRecord);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error: ' + error.message });
  }
});

module.exports = router;
