import {MongoClient} from 'mongodb';
import dotenv from 'dotenv'


dotenv.config();

const uri = process.env.CONNECTION_STRING; // "mongodb+srv://sa:sa@cluster0.zywwa.mongodb.net/tp2_proyecto_final?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const DB_PROYECTO_FINAL = "tp2_proyecto_final"
const COLLECTION_USUARIOS = "usuarios_api"

let instance = null;
async function getConnection (){
    if(instance == null){
        instance = client.connect();
    }
    return instance;
}

export {getConnection}