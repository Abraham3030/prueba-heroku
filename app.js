const express   = require('express');

const PORT      = process.env.PORT || 3000;

const app       = express();

app.get( '/', ( req, res ) => {
    res.sendFile('./index.html', {root: 'views'});
});

app.listen( PORT, () => {
    console.log('Escuchando en el puerto', PORT);
});