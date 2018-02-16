const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/random', (req, res) => {
    res.json({"status":"success","message":Math.floor((Math.random() * 10) + 1)});
});


exports.api = functions.https.onRequest(app);