// build your `/api/tasks` router here
const express = require('express');

const Task = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
   try {
      const data = await Task.getAll();
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

router.post('/', async (req, res) => {
   try {
      const newTask = req.body;
      const data = await Task.create(newTask);
      res.json(data)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

module.exports = router;