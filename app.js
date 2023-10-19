const express = require('express');
const app = express();
const port = 5000;

// define a sample API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello, this is your API response!'});
});

//start server
app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
});