const path    = require('path')
const express = require('express')
const routes  = require('./routes')


//crear una app de express
const app     = express();
//cargar archivos estticos
app.use(express.static('public'));
//habilitar PUG
app.set('view engine','pug')
//Añadir la carpeta de las vistas
app.set('views' , path.join(__dirname,'./views'))
// permitir obtener el body de una peticion aplica para version de expres 
app.use(express.urlencoded({extended:true}))
// Routes
app.use('/' , routes() );

app.listen('3000')