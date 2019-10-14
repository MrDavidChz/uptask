const path             = require('path')
const express          = require('express')
const routes           = require('./routes')

//crear la conexion de la base de datos
const db = require('./config/db')
const proyectos = require('./models/Proyectos')

// helpers con algunas funciones
const helpers = require('./helpers')

db.sync()
    .then( () => console.log('Conectando al servidor'))
    .catch(error => console.log(error));

//crear una app de express
const app     = express();

//cargar archivos estticos
app.use(express.static('public'));
//habilitar PUG
app.set('view engine','pug')

//Pasar var dump a la aplicacion
app.use( (req, res, next) => {
    //crear variables de forma global para que express la pueda utilizar
    res.locals.vardump = helpers.vardump;
    next();

});

//Añadir la carpeta de las vistas
app.set('views' , path.join(__dirname,'./views'))
// permitir obtener el body de una peticion aplica para version de expres 
app.use(express.urlencoded({extended:true}))
// Routes
app.use('/' , routes() );

app.listen('3000')