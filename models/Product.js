
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: {type: String , required : true},
    slug: {type: String , required : true , unique :true},
    desc: {type: String , required : true},
    img: {type: String , required : true},
    category: {type: String , required : true},
    size: {type: String },
    color: {type: String },
    price: {type: Number , required : true},
    availableQty: {type: Number , required : true},
  }, {timestamps: true});
  mongoose.models={}

// module.exports = mongoose.model('Product', ProductSchema)
export default mongoose.model.Product || mongoose.model("Product", ProductSchema);
  
