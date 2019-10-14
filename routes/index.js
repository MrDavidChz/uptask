const express = require('express')
const router = express.Router()

//importamos express validator

const { body } = require('express-validator')

const projectsController = require('../controllers/projectsController')
// module.exports = function(){

let routes  = ()=>{
    router.get('/', projectsController.projectsHome);
    router.get('/nuevo-proyecto',projectsController.formularioProyecto)
    router.post('/nuevo-proyecto' , 
        body('nombre').not().isEmpty().trim().escape(),
    
         projectsController.nuevoProyecto)

    //listar poryectos
    router.get('/proyectos/:url' ,  projectsController.proyectoPorUrl)
    //Actualizar el Proyeto

    router.get('/proyecto/editar/:id' , projectsController.formularioEditar)

    return router;
}


// return router;
// }
module.exports = routes 