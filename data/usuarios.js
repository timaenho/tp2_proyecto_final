import {getConnection} from './connection.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'bson'

// video 05/10

const DB_PROYECTO_FINAL = "tp2_proyecto_final"
const COLLECTION_USUARIOS = "usuarios_api"


async function getUsuarios () {
    const clientMongo = await getConnection();
    const usuarios = clientMongo.db(DB_PROYECTO_FINAL)
                .collection(COLLECTION_USUARIOS)
                .find()
                .toArray()
    return usuarios
}

async function getUsuarioById (id) {
    //con objectID
} 

async function addUsuario (usuario){

}

async function updateUsuario (usuario){
    // con objectID
}

async function findByCredentials (email, password){
    // con bcrypt
    // https://www.npmjs.com/package/bcrypt
}

async function generateToken (usuario){
    // video 26/10
}

export {getUsuarios,updateUsuario,addUsuario,generateToken,findByCredentials,getUsuarioById}