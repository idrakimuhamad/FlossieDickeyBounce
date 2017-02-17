/**
 * AdsController
 *
 * @description :: Server-side logic for managing ads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var adsController = {
  add: function(req, res) {
    var name = req.param('name'),
        price = req.param('price'),
        type = req.param('type'),
        data = {
          name: name,
          type: type,
          price: price
        };

    if (name && price && type) {
      AdsService.add(data, function(err) {
        if (err) return res.negotiate(err);

        res.ok('Ads added');
      });
    }
  },

  getAll: function(req, res) {
		Ads.getAll(function (err, ads) {
			if (err) return res.negotiate(err);

			return res.json(ads);
		});
	},

  get: function(req, res) {
    var adId = req.param('id');

		Ads.get(adId, function (err, ad) {
			if (err) return res.negotiate(err);

			return res.json(ad);
		});
	},

	_clearAll: function(cb) {
		Ads.clear(function (err, ad) {
			if (err) cb(err, false);

			sails.log('All ads removed');

			cb(false, true);
		});
	}

};

module.exports = adsController;
