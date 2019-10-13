

function projectsHome(req , res){
    res.render('index',{
        nombrePagina : 'Proyectos'
    })
}


function formularioProyecto(req , res){
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto'
    })
}

function nuevoProyecto(req,res){
    const { nombre } = req.body;
    let errores = [];

    if(!nombre){
        errores.push({ 'texto' : 'Agrega un nombre al proyecto'})
    }

    if(errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    }else{
        console.log(nombre)
    }
}


module.exports = {
    projectsHome,
    formularioProyecto,
    nuevoProyecto
}