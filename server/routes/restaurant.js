var express = require('express');
var router = express.Router();

var restaurant = require('../models/restaurant');

router.post('/save', function(req, res)
{
      var saverestaurant = new restaurant
      ({
      city_id : req.body.city_id,
      city_name : req.body.city_name,
      restaurant_id : req.body.restaurant_id,
      restaurant_name : req.body.restaurant_name,
      restaurant_address : req.body.restaurant_address,
      cuisine_id : req.body.cuisine_id,
      cuisine_name : req.body.cuisine_name,
      comments : req.body.comments
    });

    //save values in database
     saverestaurant.save(function (err) {
     if (err)
     {
       res.send(err);
     }
    else {
      res.send(" Restaurant saved ");
    }
  }); //end of save function
}); //end of post route save



router.delete('/delete',function(req,res)
{
   if(req.body)
   {
     var restaurantId=req.body.restaurant_id;
     restaurant.remove({
       restaurant_id:restaurantId},function(err)
     {
       if(err) {
         res.send(err);
       }
       else  {
       res.send("Restaurant Deleted");
       }
     });
   }

});

router.put('/update',function(req,res,next)
{

    var restaurantId = req.body.restaurant_id;
    var myComment = req.body.comments;
    restaurant.update({'restaurant_id':restaurantId},{$set:{'comments':myComment}},function(err)
    {
     if(err)
      {
        res.send(err);
     }
     else
      {

         res.send("comments updated");
      }
  });

});


router.get('/view', function(req, res) {
      restaurant.find({},function(err, alldetails)
      {
       if(err) throw err;
       else
       {
          res.send(alldetails);
       }
      });
});

module.exports = router;