const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const PedidoSchema = Schema({
     Documento: String,
     Nombre:String,
     Telefono:String,
     pan:String,
     cantidad:String,
     precio:Number,
     Direccion:String,
     Estado:{
        type:Boolean,
         default:true
     }
});

module.exports= mongoose.model('pedidos',PedidoSchema);
