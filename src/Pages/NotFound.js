import React from 'react';
import '../Stylesheets/NotFound.css';

export const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found-container'>
        <h1>Sorry, not found!</h1>
        <p>Please, return to the main page.</p>
        <button onClick={() => (document.location.href = '/')}>return</button>
      </div>
    </div>
  );
};
