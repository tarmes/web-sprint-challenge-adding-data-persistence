// build your `/api/resources` router here
const express = require('express');

const Resource = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const data = await Resource.getAll();
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

router.post('/', async (req, res) => {
   try {
      const newResource = req.body;
      const data = await Resource.create(newResource);
      res.json(data)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

module.exports = router;