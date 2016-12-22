var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema= new schema(
  {
    username:String,
    email:String,
    password:String
   
  }
);
var userSchema = mongoose.model('userSchema',userSchema);
module.exports = userSchema;
