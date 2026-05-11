const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
// Aquí le decimos que use la carpeta routes
app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});