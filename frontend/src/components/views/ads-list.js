import React from 'react';
import AdLink from './ad-link';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="dt-ns dt--fixed-ns ads-list">
			{props.loading ?
				<p>Loading...</p> : null
			}

      {props.ads.map(ad => {
        return (
					<AdLink customer={props.customer} key={ad.id} ad={ad} addToCart={props.addToCart} />
        );
      })}
    </div>
  );
}
