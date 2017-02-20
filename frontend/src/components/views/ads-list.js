import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">
			{props.loading ? 
				<p>Loading...</p> : null				
			}
			
      {props.ads.map(ad => {

        return (
          <Link
            key={ad.id}
            to={'/browse?ad=' + ad.id}
            className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 ml2 mr2 dib black ttc">
            {ad.name}
          </Link>
        );

      })}

    </div>
  );
}
