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
    
    const geoInfo = await geoController.getGeoInfo(cliente.ciudad);
    const geoInfoRecord = new GeoInfoRecord({
        username: cliente.usuario,
        ...geoInfo,
    });
    await geoInfoRecord.save();

    res.json(geoInfo);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error: ' + error.message });
  }
});

module.exports = router;
