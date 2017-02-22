import * as CustomerApi from './customer-api';

describe('API Request', () => {
  describe('Customer API', () => {
		it('should get all customers and return status 200', () => {
	    return CustomerApi.getCustomers()
	    .then(response => {
	      expect(response).toBeDefined();
				expect(response.status).toEqual(200)
	    });
	  });

		it('should get a customer data and return status 200', () => {
			// this is rather hard to fixed, but assuming we gonna have a
	    return CustomerApi.getCustomer('apple')
	    .then(response => {
	      expect(response).toBeDefined();
				expect(response.status).toEqual(200);
				expect(response.data.name).toEqual('apple');				
	    });
	  });
	});
});
