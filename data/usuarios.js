const getConnection = require( './connection.js')
const bcrypt = require('bcrypt') 
const jwt = require ('bcrypt')
const ObjectId = require('bson').ObjectID

// video 05/10

const DB_PROYECTO_FINAL = "tp2_proyecto_final"
const COLLECTION_USUARIOS = "usuarios_api"


async function getUsuarios () {
    const clientMongo = await getConnection.getConnection();
    const usuarios = clientMongo.db(DB_PROYECTO_FINAL)
                .collection(COLLECTION_USUARIOS)
                .find()
                .toArray()
    return usuarios
}

async function getUsuarioById (id) {
    const clientMongo = await getConnection.getConnection();
    const usuario =  clientMongo
        .db(DB_PROYECTO_FINAL)
        .collection(COLLECTION_USUARIOS)
        .findOne({_id: new ObjectId(id) })
    return usuario;

} 

async function addUsuario (usuario){

}

async function updateUsuario (usuario){
    const clientMongo = await getConnection.getConnection();
    const query = {_id: new ObjectId(usuario._id)}
    const nuevosValores = {
        idiomaAprender: usuario.idiomaAprender,
        idiomaNativo: usuario.idiomaNativo,
        localizacion: usuario.localizacion,
        username: usuario.username
    }
    const result = await clientMongo
        .db(DB_PROYECTO_FINAL)
        .collection(COLLECTION_USUARIOS)
        .updateOne(query,nuevosValores)
    // con objectID
    return result
}

async function findByCredentials (email, password){
    // con bcrypt
    // https://www.npmjs.com/package/bcrypt
}

async function generateToken (usuario){
    // video 26/10
}

module.exports = 
{   getUsuarios,
    updateUsuario,
    addUsuario,
    generateToken,
    findByCredentials,
    getUsuarioById}