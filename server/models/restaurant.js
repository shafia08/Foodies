var mongoose = require('mongoose');
var schema = mongoose.Schema;

var restaurantSchema= new schema(
  {
     city_id:Number, 
     city_name:String,
     restaurant_id:Number,
     restaurant_name:String,
     restaurant_address:String,
     cuisine_id:Number,
     cuisine_name:String,
     comments:String
  }
);
var restaurantSchema = mongoose.model('restaurantSchema',restaurantSchema);
module.exports = restaurantSchema;
