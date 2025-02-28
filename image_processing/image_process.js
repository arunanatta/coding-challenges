const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');
const app = express();

app.get('/image-process', (req, res) => {
    const worker = new Worker(path.join(__dirname, 'worker_image.js'));
    
    worker.on('message', (message) => {
        res.send(message);
    });
    
    worker.on('error', (error) => {
        res.status(500).send(`Worker error: ${error.message}`);
    });
});

//server listening on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
