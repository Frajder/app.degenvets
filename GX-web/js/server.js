const express = require('express');
const path = require('path');

// ... existing imports ...

// Serve static files
app.use(express.static(path.join(__dirname, '../static')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));

// Serve main HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
}); 