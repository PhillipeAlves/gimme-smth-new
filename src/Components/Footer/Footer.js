import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../Stylesheets/Footer.css';

export const Footer = () => {
  const location = useLocation();
  const homePage = location.pathname === '/';

  if (homePage) {
    return (
      <footer className='footer'>
        <h2>About</h2>
        <p>
          This application allows you to search for movies and keep track of the
          ones you have already watched so you don't have to keep browsing the
          same movies over and over again.
        </p>
        <p>
          By marking the movie as watched it disappears from the search and it
          gets displayed only in the 'Watched Movies' section on the landing
          page.
        </p>
        <div className='footer-home'>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
            }}
            className='footer-logo'
          ></div>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className='footer'>
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/logo.png'})`,
          }}
          className='footer-logo'
        ></div>
      </footer>
    );
  }
};
