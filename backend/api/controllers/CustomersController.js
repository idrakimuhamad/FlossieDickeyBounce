/**
 * CustomersController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var customersController = {
	_generate: function(name, deals, cb) {
		if (name && deals) {
			Customers.generate({
				name: name,
	      deals: deals
			}, cb);
		}
		// 	}, function (err, customer) {
	  //
		//
	  //     return res.ok('Customer created successfully');
	  //   });
		// } else {
		// 	res.badRequest('Missing required parameter name and deals');
		// }
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
				customers.forEach(function(customer) {
					if (customer.name && customer.deals) {
						var c = customersController._generate(customer.name, customer.deals, function(err, result) {
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
