import React from 'react';
import { limitTextLength } from '../../Helpers/functions';

export const Description = ({ overview }) => {
  return <p className='movie-description'>{limitTextLength(overview, 100)}</p>;
};
