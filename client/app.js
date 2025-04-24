document.getElementById('generateBtn').addEventListener('click', async () => {
    const baseColor = document.getElementById('colorInput').value;
  
    // Nur wenn baseColor gesetzt ist
    if (!baseColor || !baseColor.startsWith('#')) {
      alert("Bitte gültigen Farbwert im Format #123456 eingeben!");
      return;
    }
  
    try {
      const res = await fetch('http://localhost:5000/api/palette', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ baseColor })
      });
  
      if (!res.ok) {
        throw new Error(`Server-Fehler: ${res.status}`);
      }
  
      const data = await res.json();
  
      document.getElementById('palette').innerHTML = data.palette
        .map(color => `<div style="background-color:${color};color:#fff;padding:1rem">${color}</div>`)
        .join('');
    } catch (error) {
      console.error("Fehler beim Holen der Farbpalette:", error);
      alert("Fehler beim Laden der Farbpalette. Bitte überprüfe die Serververbindung.");
    }
  });