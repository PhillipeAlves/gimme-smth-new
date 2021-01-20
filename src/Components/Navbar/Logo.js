import React from 'react';

export const Logo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
      }}
      className='martins-logo-navbar'
    ></div>
  );
};
