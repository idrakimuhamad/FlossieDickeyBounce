/**
 * Customers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    deals: {
      type: 'array'
    }
  },

  /**
   * Create a new customer using the provided inputs
   *
   * @param  {Object}   inputs
   *                     • name     {String}
   *                     • deals    {Array}
   * @param  {Function} cb
   */
   add: function (inputs, cb) {
    //  make sure the customer are not yet exist
    Customers.findOne({ name: inputs.name }).exec(function(err, customer) {
       if (err) Customers.findOne({ name: inputs.name }).exec(cb);

       if (!customer) {
        //  create the customer
        Customers.create({
          name: inputs.name,
          deals: inputs.deals
        })
        .exec(cb);
      } else {
        cb(true, false);
      }
     });
   },

   get: function(name, cb) {
     Customers.findOne({ name: name }).exec(cb);
   },

   getAll: function (cb) {
     Customers.find({}).exec(cb);
   },

   clear: function(cb) {
     Customers.destroy({}).exec(cb);
   }

};
