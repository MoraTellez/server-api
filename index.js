const express = require('express');
const axios = require('axios');

const app = express();

// Endpoint para obtener la tasa de cambio
app.get('/get-rate', async (req, res) => {
    try {
        const url = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ef4713efa0334c508b09725aff05008c&base=USD&symbols=CAD";

        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        console.error("Error al obtener la tasa de cambio:", error.message);
        res.status(500).json({ error: "No se pudo obtener la tasa de cambio" });
    }
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor intermedio corriendo en http://localhost:${PORT}`);
});