const getConnection = require( './connection.js')
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

async function getUsuarioByMail (_mail) {
    const clientMongo = await getConnection.getConnection();
    const usuario =  clientMongo
        .db(DB_PROYECTO_FINAL)
        .collection(COLLECTION_USUARIOS)
        .findOne({mail: _mail })
    return usuario;

} 

async function addUser(user){
    const clientMongo = await getConnection.getConnection();
    const result = clientMongo  
                    .db(DB_PROYECTO_FINAL)
                    .collection(COLLECTION_USUARIOS)
                    .insertOne(user)
        return result;
}

async function findByAuthToken (authToken){
    
}


/* async function addUsuario (usuario){
    const clientMongo = await getConnection.getConnection();
    
    const userExists = await clientMongo
        .db(DB_PROYECTO_FINAL)
        .collection(COLLECTION_USUARIOS)
        .findOne({googleAutToken: usuario.googleAutToken})
    if(!userExists){
        const result = await clientMongo    
        .db(DB_PROYECTO_FINAL)
        .collection(COLLECTION_USUARIOS)
        .insertOne({...usuario})
        return result;
    }else if(userExists){
        throw new Error("El usuario existe")
    }
} */

async function updateUsuario (usuario){
    const clientMongo = await getConnection.getConnection();
    const query = {_id: new ObjectId(usuario._id)}
    const nuevosValores = {
        $set: 
        {
        idiomaAprender: usuario.idiomaAprender,
        idiomaNativo: usuario.idiomaNativo,
        localizacion: usuario.localizacion,
        username: usuario.username
    }
    }
    const result = await clientMongo
        .db(DB_PROYECTO_FINAL)
        .collection(COLLECTION_USUARIOS)
        .updateOne(query,nuevosValores)
    // con objectID
    return result
}



async function generateToken (usuario){
    
}

module.exports = 
{   getUsuarios,
    updateUsuario,
    addUser,
    generateToken,
    getUsuarioByMail}