// solo para probar

let data = require("./usuarios.js");



const getUsuarios = async function () {
    return data.getUsuarios()
}
const getUsuarioById = async function () {
    return await data.getUsuarioById()
}

const updateUsuario =  async function () {
    return await data.updateUsuario(usuario)
}
console.log(data.getUsuarios())
module.export = 
        {getUsuarios, 
        getUsuarioById,
        updateUsuario}

