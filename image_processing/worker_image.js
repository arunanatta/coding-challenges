const { parentPort } = require('worker_threads');

// Simulate CPU-intensive image processing task
for (let i = 0; i < 100000000; i++) {
    // Perform image processing operations
}

parentPort.postMessage('Image processed');
