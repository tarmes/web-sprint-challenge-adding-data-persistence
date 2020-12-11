// build your `/api/projects` router here
const express = require('express');

const Project = require('./model');

const router = express.Router();

router.get('/', async (req, res) => {
   try {      
      const data = await Project.getAll();
      data.forEach(project => {
         if (project.completed == 0) {
            project.completed = false;
         } else {
            project.completed = true
         }
      })
      // project.completed ? true : false;
      res.json(data);
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

router.post('/', async (req, res) => {
   try {
      const newProject = req.body;
      const data = await Project.create(newProject);
      res.json(data)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

module.exports = router;