/**
 * Ads.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    adType: {
      type: 'string'
    },
    price: {
      type: 'float'
    }
  },

  add: function(data, cb) {
    Ads.findOne({ name: data.name }).exec(function(err, ad) {
      if (err) cb(err, false);

      if (!ad) {
       //  create the ad
       Ads.create({
         name: data.name,
         adType: data.type,
         price: data.price
       })
       .exec(cb);
     } else {
       cb(true, false);
     }
   });
 },

 get: function(type, cb) {
   Ads.findOne({ adType: type }).exec(cb);
 },

 getAll: function (cb) {
   Ads.find({}).exec(cb);
 },

 clear: function(cb) {
   Ads.destroy({}).exec(cb);
 }
};
