const express = require('express');
const router = express.Router();
const Job = require('../Models/Job');


router.post('/post-job', async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
