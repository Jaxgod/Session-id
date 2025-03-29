const express = require('express');
const path = require('path');
const qrcode = require('qrcode'); 
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/qr-code', (req, res) => {
  const whatsappLink = 'https://web.whatsapp.com/';   qrcode.toDataURL(whatsappLink, (err, url) => {
    if (err) {
      res.status(500).send('Erreur lors de la génération du QR Code');
    } else {
 res.json({ qrCodeUrl: url });
    }
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
