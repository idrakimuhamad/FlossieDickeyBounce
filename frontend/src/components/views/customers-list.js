import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">
      {props.customers.map(customer => {

        return (
          <Link
            key={customer.id}
            to={'/customers/' + customer.id}
            className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 ml2 mr2 dib black ttc">
            {customer.name}
          </Link>
        );

      })}

    </div>
  );
}
