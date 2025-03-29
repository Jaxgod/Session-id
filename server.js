const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public','pair')));
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'public', 'index.html','pair'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
