import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
		<div className="dtc-ns pa2">
      <div className="w-100 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div className="tc">
  				<h5 className="f5">{props.ad.name}</h5>
  				<hr className="mw3 bb bw1 b--black-10"/>
  			</div>
				<h2 className="f2 tc center black-70">${props.ad.price}</h2>
  			{/* <p className="lh-copy measure tc center f6 black-70">
  				${props.ad.price}
  			</p> */}
      </div>			
		</div>
  );
}
