import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">
      {props.customers.map(customer => {

        return (
          <div key={customer.id} className="data-list-item">
            <div className="details">
              <Link to={'/customers/' + customer.id}>{customer.name}</Link>
            </div>
          </div>
        );

      })}

    </div>
  );
}