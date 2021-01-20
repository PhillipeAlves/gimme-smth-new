import React from 'react';
import axios from 'axios';

export const DetailsBtn = ({ id }) => {
  const getIMDB = async (id) => {
    try {
      const { data: response } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US`
      );
      window.open(`https://www.imdb.com/title/${response.imdb_id}`, '_blank');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button onClick={() => getIMDB(id)} className='movie-details-btn'>
      DETAILS
    </button>
  );
};
