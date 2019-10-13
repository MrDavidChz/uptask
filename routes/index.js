const express = require('express')
const router = express.Router()

const projectsController = require('../controllers/projectsController')
// module.exports = function(){

let routes  = ()=>{
    router.get('/', projectsController.projectsHome);
    router.get('/nuevo-proyecto',projectsController.formularioProyecto)
    router.post('/nuevo-proyecto' , projectsController.nuevoProyecto)
    return router;
}


// return router;
// }
module.exports = routes 