
const express = require('express');
const router = express.Router(); 
const pedidos = require('../models/pedidos');
var RPT=false;

router.get('/', async (req, res) => {
  const PEDIDOS = await pedidos.find();//Busca los registro de la base de datos 
  res.render('index', {
    PEDIDOS
  });  
});


router.post('/add', async (req, res, next) => {
  var pan='';
  const PEDIDOS ={Documento,Nombre,Telefono,pan,cantidad,precio,Direccion} = new pedidos(req.body);
  console.log(PEDIDOS);
  if(!Documento && !Nombre && !cantidad && !Direccion){
    RPT=false;
    res.send('NO se puede guardar el registro');
    console.log('NO se puede guardar el pedido');
  }
  else{
  pan = PEDIDOS.pan;
  cantidad =PEDIDOS.cantidad;
  console.log(pan);
  switch(pan){
    case('Panqueso'):console.log(' El pedido es pandequeso');
       Calcular_Precio(cantidad,500);
       break ; 
    case('Buñuelos'):
       Calcular_Precio(cantidad,300);
       break ; 
    case('Pan debono'):console.log(' El pedido es pandequeso');
       Calcular_Precio(cantidad,400);
       break ; 
    case('pan de yuca'):
       Calcular_Precio(cantidad,1000);
       break ; 
    case('Pancerotis'):console.log(' El pedido es pandequeso');
        Calcular_Precio(cantidad,2500);
        break ; 
   case('Pan de canela'):
       Calcular_Precio(cantidad,2000);
       break;
  }
  console.log('registro guardado ');
  await PEDIDOS.save();
  res.redirect('/')
  }
  function Calcular_Precio(cantidad, valor){
    total =cantidad*valor;
    console.log(total);
    PEDIDOS.precio=total;
  }
});



router.get('/edit/:Document', async (req, res, next) => {
  const PEDIDOS= await pedidos.findById(req.params.Document);
  console.log(PEDIDOS)
  res.render('edid', { PEDIDOS }); //Redirecionamiento hasia la view de editar 
});

router.post('/edit/:Document', async (req, res, next) => {
  const { Document } = req.params;
  const PEDIDOS = new pedidos(req.body);
  pan = PEDIDOS.pan;
  cantidad =PEDIDOS.cantidad;
  console.log(pan);
  switch(pan){
    case('Panqueso'):console.log(' El pedido es pandequeso');
       Calcular_Precio(cantidad,500);
       break ; 
    case('Buñuelos'):
       Calcular_Precio(cantidad,300);
       break ; 
    case('Pan debono'):console.log(' El pedido es pandequeso');
       Calcular_Precio(cantidad,400);
       break ; 
    case('pan de yuca'):
       Calcular_Precio(cantidad,1000);
       break ; 
    case('Pancerotis'):console.log(' El pedido es pandequeso');
        Calcular_Precio(cantidad,2500);
        break ; 
   case('Pan de canela'):
       Calcular_Precio(cantidad,2000);
       break;
  }
  function Calcular_Precio(cantidad, valor){
    total =cantidad*valor;
    console.log(total);
    req.body.precio=total;
  }
  await pedidos.update({_id: Document}, req.body);
  console.log(req.body)
  res.redirect('/');
});

router.get('/Eliminar/:Document', async (req, res, next) => {
  let { Document } = req.params;
  await pedidos.remove({Documento: Document});
  res.redirect('/');
});

router.get('/edit',(req,res)=>{
  res.render('edid')
})
  module.exports = router;

