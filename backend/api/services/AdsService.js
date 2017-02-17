var AdsService = {

  /**
   * Create ad
   *
   * @required {String} name
   * @required {String} type
   * @required {Float} price
   */
  add: function(data, done) {
		if (data.name && data.type && data.price) {
			Ads.add(data, function(err) {
        if (err) return done(err);

        return done();
      });
		}
	},

  /**
   * Create default ads
   */
  addDefaultAd: function (done) {
    var data = [
  			{
          name: "Classic Ad",
          type: "classic",
          price: 269.99
        },
        {
          name: "Standout Ad",
          type: "standout",
          price: 322.99
        },
        {
          name: "Premium Ad",
          type: "premium",
          price: 394.99
        }
  		];

    AdsService._clearAll(function(err, success) {
      if (err) return done(err);

      data.forEach(function(ad) {
        if (ad.name && ad.type && ad.price) {
          AdsService.add(ad, function(err) {
            // res.negotiate() will determine if this is a validation error
            // or some kind of unexpected server error, then call `res.badRequest()`
            // or `res.serverError()` accordingly.
            if (err) {
              sails.log('Ad not created for ' + ad.name);
            } else {
              sails.log('Ad created');
            }
          });
        }
      });

      return done();
    });
  },

  _clearAll: function(done) {
    Ads.clear(function (err, ad) {
			if (err) done(err);

			sails.log('All ads removed');

			done();
		});
  }
};

module.exports = AdsService;
