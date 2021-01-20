import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Rating = ({ vote_average }) => {
  if (!vote_average) {
    return '';
  }
  return (
    <div className='movie-rating'>
      <FontAwesomeIcon className='movie-rating-icon' icon={faStar} />
      <p>{vote_average}/10</p>
    </div>
  );
};
