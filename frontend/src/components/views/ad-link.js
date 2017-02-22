import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  const deals = props.customer && props.customer.deals ?
								props.customer.deals : [];
	let haveClassicDeal = false, classicRule = {};
	let standoutPrice = 0, haveStandoutDeal = false;
	let havePremiumDeal = false, premiumRule = {};
	
	deals.forEach((deal) => {
		if (deal.dealsType === 'classic') {
			haveClassicDeal = !haveClassicDeal;
			classicRule = deal.rule[0];
		}
		if (deal.dealsType === 'standout') {
			haveStandoutDeal = true;
			standoutPrice = deal.rule[0].pricePerItem;
		}
		if (deal.dealsType === 'premium') {
			havePremiumDeal = !havePremiumDeal;
			premiumRule = deal.rule[0];
		}
	});
	
  return (
		<div className="dtc-ns pa2">
      <a href=""
        className="ad-item db link black"
        onClick={props.addToCart(props.ad.id)}>
        <div className="w-100 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 grow">
          <div className="tc">
    				<h5 className="f5">{props.ad.name}</h5>
    				<hr className="mw3 bb bw1 b--black-10"/>
    			</div>
  				<h2 className="f3 f2-l tc center black-70">
            <span 
							className={haveStandoutDeal && props.ad.adType === 'standout' ? 
							'db strike f4 f3-l' : 'db'}>${props.ad.price}
						</span>
						
						{ haveStandoutDeal && props.ad.adType === 'standout' ?
							<span className="db">${standoutPrice}</span> : null
						}
          </h2>
					{ haveClassicDeal && props.ad.adType === 'classic' ?
						<p className="f6 lh-copy measure ma0">
							Get the price of <strong>{classicRule.forItemPrice}</strong>  items when you add <strong>{classicRule.minItem}</strong> items
						</p> : null
					}
					
					{ havePremiumDeal && props.ad.adType === 'premium' ?
						<p className="f6 lh-copy measure ma0">
							Get discounted price of <strong>${premiumRule.pricePerItem}</strong> per item when you add <strong>{premiumRule.minItem}</strong> or more items
						</p> : null
					}
        </div>
      </a>
		</div>
  );
}
