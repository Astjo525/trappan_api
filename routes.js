/* File containing routes to all requests. The requests are sent on to handlers */

const express = require('express');
const router = express.Router();

const { getEntry, 
        getNumberOfEntries, 
        createQuestion } = require('./handlers/questions.manager');

// Requests for handling questions in database
router.get('/entry', getEntry);
router.post('/entry', createQuestion);

router.get('/size', getNumberOfEntries);


module.exports = router;