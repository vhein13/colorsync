// server/server.js

require('dotenv').config();         // Lädt Variablen aus der .env-Datei (für API-Keys etc.)
const express = require('express'); // Express-Webserver importieren
const cors = require('cors');       // Damit dein Frontend mit dem Backend sprechen darf

const app = express();              // Express-App starten
app.use(cors());                    // CORS aktivieren
app.use(express.json());           // Erlaubt das Parsen von JSON im Request (z. B. bei POST)

// API-Routen einbinden
const paletteRoutes = require('./routes/palette');
app.use('/api/palette', paletteRoutes);

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});