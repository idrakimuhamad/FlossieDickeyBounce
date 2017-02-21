import React from 'react';

export default (props) => {
  return (
    <header className='tc pv4 pv5-ns bg-mid-gray app-header'>
      <h1 className='f5 f4-ns fw6'>
        {/* instead of making this a react router link,
        we purposely use anchor to serve as a page refresh to
        clear all states */}
        <a href="/"
          className="link dim near-white">
          Ad Shop
        </a>
      </h1>
    </header>
  );
};
