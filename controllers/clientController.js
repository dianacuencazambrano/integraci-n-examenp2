const express = require('express');
const router = express.Router();
const Cliente = require('../models/clientModel.js');

router.post("/", async (req, res) => {
  try {
    const newClient = new Cliente(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
