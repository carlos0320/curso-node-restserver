const { response } = require('express');


const usuariosGet = ( req, res = response ) => {  
    
    const { q, nombre = 'No name', apiKey, page=1, limit} = req.query;
    res.json({
        msg: 'get API - controlador'
    });
}

const usuariosPost = ( req, res = response ) => {
    
    const { nombre, edad } = req.body;
    

    res.json({
        msg: 'Post API - controller',
        nombre,
        edad,
        q,
        apiKey,
        page,
        limit
    })
}

const usuariosPut =  ( req, res = response ) => {

    const { nombre } = req.body;
    const id =  req.params.id;

    const numero = 0;
    console.log( numero )
    res.json({
        msg: 'PUT API - controller',
        id
        
    });
}

const usuariosDelete = (req, res = response ) => {

    res.json({
        msg: 'DELETE API -controller'
    });
}

module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}