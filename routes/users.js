var express = require('express');
const { routes } = require('../app');
var router = express.Router();
const data = require('../data/usuarios') 

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get('/',async(req,res)=>{
  const result = await data.getUsuarios();
  res.send(result)
})

router.post('/', async (req,res)=>{
  try {
    console.log("entro")
    let usuario = req.body
    console.log(usuario)
    const result = data.addUsuario(usuario)
    res.send(result)
  } catch (error) {
    res.status(401).send(error.message)
  }
})

router.get('/:_id', async (req,res)=>{

  const user = await data.getUsuarioById(req.params._id);
  res.send(user); 
})

 router.put('/:id', async(req,res)=> {
  console.log("entro")
  let usuario = {...req.body,_id:req.params.id}
  console.log(usuario)
  let userUpdated = await data.updateUsuario(usuario)
  res.send(userUpdated)
})






module.exports = router;
