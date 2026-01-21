// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

const API_URL = 'https://console.green-api.com';

app.get('/waInstance/:id/:method/:token', async (req, res) => {
    const { id, method, token } = req.params;
    try {
        const response = await fetch(`${API_URL}/waInstance${id}/${method}/${token}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/waInstance/:id/:method/:token', async (req, res) => {
    const { id, method, token } = req.params;
    try {
        const response = await fetch(`${API_URL}/waInstance${id}/${method}/${token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Proxy на :3000'));
