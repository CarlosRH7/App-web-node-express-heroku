const express = require('express')
const app = express()

const hbs = require('hbs');
// Import helpers de HBS (Variables gobales)
require('./hbs/helpers'); 

// configuracion del puerto para el servidor en la nube
// para que le diga al servidor web qué puerto debe escuchar
const port = process.env.PORT || 3000;

// middleware express, para poder agregar una plantilla html desde la carpeta public
app.use(express.static(__dirname + '/public'));

// Agregamos HBS
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');


app.get('/', function (req, res) {
    res.render('home', {
        nombre:'CharLY '
    });
})
app.get('/about', function (req, res) {
    res.render('about',{ });
})
 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})