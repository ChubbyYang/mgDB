const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var GoodsSchema = new Schema({          
    goodsId : { type: Number },                
    goodsImg: {type: String},            
    goodsName: {type: String},                   
    price : { type: Number}                    
});
module.exports = mongoose.model('Goods',GoodsSchema);