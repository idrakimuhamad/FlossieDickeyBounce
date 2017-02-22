import React from 'react';
import _ from 'lodash';

export default function(props) {
	const deals = props.customer && props.customer.deals ?
								props.customer.deals : [];	
	const customersRule = deals && _.find(deals, {
		dealsType: props.ad.adType });
	let price = 0, haveDiscount = false;

	if (customersRule) {
		price += props.priceRule(customersRule, props.ad.price, props.ad.count);
		
		// if different price, assume there's discount
		if (price !== props.normalPrice(props.ad.price, props.ad.count)) {
			haveDiscount = !haveDiscount;
		}
	} else {
		price += props.normalPrice(props.ad.price, props.ad.count);
	}
	
  return (
		<div className="checkout-item">
      <div className="dt w-100 bb b--black-10 pb2 mt2">
        <div className="cf">
          <div className="fl w-60 pa2">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">{props.ad.name}</h1>
	          <p className="f6 mv0 mt2">${props.fixedDecimal(props.ad.price)}</p>
					</div>
					<div className="fl w-10 pa2">
						<p className="f3 black ma0">x{props.ad.count}</p>
					</div>
          <div className="fl w-30 pa2">
						<p className="black ma0">
							<span className="f4 lh-copy">${props.fixedDecimal(price)}</span>
							{haveDiscount ?
								<span className="f6 br1 pa1 bg-light-red white ml2 ttu lh-copy">Discounted</span>
								: null
							}
						</p>
					</div>
        </div>
      </div>
		</div>
  );
}
