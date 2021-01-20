import React from 'react';
import '../Stylesheets/Search.css';

export const OverLayer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/dots-pattern.jpg'})`,
      }}
      className='search-page-overlayer'
    ></div>
  );
};
