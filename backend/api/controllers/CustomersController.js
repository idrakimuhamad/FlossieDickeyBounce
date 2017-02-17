/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var customersController = {
	_add: function(name, deals, cb) {
		if (name && deals) {
			Customers.add({
				name: name,
	      deals: deals
			}, cb);
		}
	},

  add: function(req, res) {
    var name = req.params('name'),
        deals = req.params('deals');

    if (name && deals) {
      customersController._add(name, deals, function(err, result) {
        if (err) return res.negotiate(err);

        res.ok('Customer added');
      });
    }
  },

	generateDefault: function(req, res) {
		var customers = [
			{ name: 'default', deals: [] },
			{ name: 'unilever', deals: [] },
			{ name: 'apple', deals: [] },
			{ name: 'nike', deals: [] },
			{ name: 'ford', deals: [] }
		];

		// clear customers collection
		customersController._clearAll(function(err, success) {
			if (err) return res.negotiate(err);

			if (success) {

        // add default ads
        AdsService.addDefaultAd(function() {

          // add customer
          customers.forEach(function(customer) {
            // set the deals for customer
            if (customer.name === 'unilever') {
              customer.deals = [
                {
                  name: "3 for 2 deals on Classic Ads",
                  dealsType: "classic",
                  adId: "classic",
                  rule: [
                    {
                      minItem: 3,
                      forItemPrice: 2
                    }
                  ]
                }
              ]
            } else if (customer.name === 'apple') {
              customer.deals = [
                {
                  name: "Standout Ads for $299.99",
                  dealsType: "standout",
                  adId: "standout",
                  rule: [
                    {
                      pricePerItem: 299.99
                    }
                  ]
                }
              ];
            } else if (customer.name === 'nike') {
              customer.deals = [
                {
                  name: "Premium Ads for 4 or more ads",
                  dealsType: "premium",
                  adId: "premium",
                  rule: [
                    {
                      minItem: 4,
                      pricePerItem: 379.99
                    }
                  ]
                }
              ];
            } else if (customer.name === 'ford') {
              customer.deals = [
                {
                  name: "5 for 4 deal on Classic ads",
                  dealsType: "classic",
                  adId: "classic",
                  rule: [
                    {
                      minItem: 5,
                      forItemPrice: 4
                    }
                  ]
                }, {
                  name: "Standout Ads for $309.99",
                  dealsType: "standout",
                  adId: "standout",
                  rule: [
                    {
                      pricePerItem: 309.99
                    }
                  ]
                }, {
                  name: "Premium Ads for 3 or more ads",
                  dealsType: "premium",
                  adId: "premium",
                  rule: [
                    {
                      minItem: 3,
                      pricePerItem: 389.99
                    }
                  ]
                }
              ];
            }

            if (customer.name && customer.deals) {
  						var c = customersController._add(customer.name, customer.deals, function(err, result) {
  							// res.negotiate() will determine if this is a validation error
  				      // or some kind of unexpected server error, then call `res.badRequest()`
  				      // or `res.serverError()` accordingly.
  				      if (err) {
  								sails.log('Customer not created for ' + customer.name);
  							} else {
  								sails.log('Customer created');
  							}
  						});
  					}
  				});

  				res.ok('Done');
        });
			}
		});
	},

	getAll: function(req, res) {
		Customers.getAll(function (err, customers) {
			if (err) return res.negotiate(err);

			return res.json(customers);
		})
	},

	_clearAll: function(cb) {
		Customers.clear(function (err, customer) {
			if (err) cb(err, false);

			sails.log('All customers removed');

			cb(false, true);
		});
	}
};

module.exports = customersController;
