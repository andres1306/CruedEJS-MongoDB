const mongoose=require('mongoose');
const schema =mongoose.schema;

const imgSchema =schema({
    name:String,
    Url:String,
    description:String
})

module.exports= mongoose.model('img',imgSchema);