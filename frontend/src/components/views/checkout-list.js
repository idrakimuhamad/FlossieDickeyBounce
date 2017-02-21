import React from 'react';
import { Link } from 'react-router';
import CheckoutItem from './checkout-item';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="checkout-list mw8">
			{props.loading ?
				<p>Loading...</p> : null
			}
			
			{props.ads.length === 0 ?
				<p className="f5 lh-copy">
					You have no item added into the cart. <Link to={'/browse?customer=' + props.customerId}>
					Go back to the browse page</Link> to pick you package.
				</p>
				:
				props.ads.map(ad => {
	        return (
						<CheckoutItem
							key={ad.id}
							ad={ad} />
	        );
	      })
			}
    </div>
  );
}
