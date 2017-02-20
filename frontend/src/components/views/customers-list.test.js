// import React from 'react';
// import { Link } from 'react-router';
// 
// // Using "Stateless Functional Components"
// export default function(props) {
//   return (
//     <div className="data-list">
//       {props.customers.map(customer => {
// 
//         return (
//           <Link
//             key={customer.id}
//             to={'/browse?customer=' + customer.id}
//             className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 ml2 mr2 dib black ttc">
//             {customer.name}
//           </Link>
//         );
// 
//       })}
// 
//     </div>
//   );
// }

import React from 'react';
import { shallow } from 'enzyme';
import CustomerList from './customers-list';

function setup() {
	const props = {
		customers: [
			{
				"name": "default",
				"deals": [],
				"createdAt": "2017-02-17T07:20:18.689Z",
				"updatedAt": "2017-02-17T07:20:18.689Z",
				"id": 66
			},
			{
				"name": "unilever",
				"deals": [
					{
						"name": "3 for 2 deals on Classic Ads",
						"dealsType": "classic",
						"adId": "classic",
						"rule": [
							{
								"minItem": 3,
								"forItemPrice": 2
							}
						]
					}
				],
				"createdAt": "2017-02-17T07:20:18.693Z",
				"updatedAt": "2017-02-17T07:20:18.693Z",
				"id": 67
			},
			{
				"name": "apple",
				"deals": [
					{
						"name": "Standout Ads for $299.99",
						"dealsType": "standout",
						"adId": "standout",
						"rule": [
							{
								"pricePerItem": 299.99
							}
						]
					}
				],
				"createdAt": "2017-02-17T07:20:18.698Z",
				"updatedAt": "2017-02-17T07:20:18.698Z",
				"id": 68
			}
		]
	};
	
	const wrapper = shallow(<CustomerList {...props} />);
	
	return {
		props,
		wrapper
	};
}

describe('components', () => {
	describe('Customer List', () => {
		it('Should render itself', () => {
			const { wrapper } = setup();
			
			expect(wrapper.find('.data-list').length).toEqual(1);
		});
		
		it('Should render at least 1 customer', () => {
			const { wrapper } = setup();
			
			expect(wrapper.find('Link').length).toBeGreaterThan(0);
		});
	});
});
