// server/routes/palette.js

const express = require('express');
const router = express.Router();

// POST-Anfrage an /api/palette
router.post('/', (req, res) => {
  const { baseColor } = req.body; // Extrahiere die übergebene Farbe

  // Beispiel-Palette (später ersetzen wir das mit KI oder einer echten Farbgenerierung)
  const palette = [
    baseColor,
    "#ffffff",
    "#000000",
    "#cccccc",
    "#333333"
  ];

  console.log("Anfrage erhalten:", baseColor);
  // Antwort zurück an den Client
  res.json({ palette });
});

module.exports = router;
