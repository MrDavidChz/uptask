const Proyectos = require('../models/Proyectos')

async function projectsHome(req , res){
    let proyectos = await Proyectos.findAll()

    res.render('index',{
        nombrePagina : 'Proyectos',
        proyectos

    })
}


async function formularioProyecto(req , res){
    const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto',
        proyectos
    })
}

async function nuevoProyecto(req,res){
    const proyectos = await Proyectos.findAll();
    const { nombre } = req.body;
    let errores = [];

    if(!nombre){
        errores.push({ 'texto' : 'Agrega un nombre al proyecto'})
    }

    if(errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina : 'Nuevo Proyecto',
            errores,
            proyectos
        })
    }else{
        
        let proyecto = await Proyectos.create({nombre});
        res.redirect('/',{
            nombrePagina : 'Nuevo Proyecto',
            proyectos
        });
    }
}



async function proyectoPorUrl(req,res, next){
    const proyectos = await Proyectos.findAll();
    let proyecto    = await Proyectos.findOne({
        where:{
            url: req.params.url
        }
    });

    if(!proyecto) return next();

    res.render('tareas',{
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    })
}

async function formularioEditar(res, req, next){
    const proyectos = await Proyectos.findAll();
    res.render('nuevoProyecto', {
        nombrePagina: 'Editar Proyecto',
        proyectos
    })
}

module.exports = {
    projectsHome,
    formularioProyecto,
    nuevoProyecto,
    proyectoPorUrl,
    formularioEditar
}