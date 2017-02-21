import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
		<div className="checkout-item">
      <div className="dt w-100 bb b--black-10 pb2 mt2">
        <div className="cf">
          <div className="fl w-80 pa2">
						<h1 className="f6 f5-ns fw6 lh-title black mv0">{props.ad.name}</h1>
	          <p className="f6 mv0 mt2">${props.ad.price}</p>
					</div>
					<div className="fl w-20 pa2">
						<p className="f3 black ma0">x{props.ad.count}</p>
					</div>
        </div>
      </div>
		</div>
  );
}
