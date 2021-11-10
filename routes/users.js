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

router.get('/:id', async (req,res)=>{
  const user = await data.getUsuarioById(req.params.id);
  res.send(user); 
})

/* router.put('/:id', async(req,res)=> {
  let usuario = {...req.body,_id:req.params.id}
  let userUpdated = await data.updateUsuario(usuario)
  res.send(userUpdated)
})
 */




module.exports = router;
