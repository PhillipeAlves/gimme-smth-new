import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export const CheckBox = ({ id }) => {
  const {
    markMovieAsChecked,
    markMovieAsUnchecked,
    checkedMovies,
  } = useContext(Context);

  const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=1e448e0dfcdbb565f5d329820065b4d2`;

  const watchedMovie = (() => checkedMovies.includes(movieURL))();

  const handleClick = () => {
    if (watchedMovie) {
      markMovieAsUnchecked(movieURL, id);
    } else {
      markMovieAsChecked(movieURL, id);
    }
  };

  return (
    <div className='movie-checkbox'>
      <p className={watchedMovie ? 'movie-checked-box' : ''}>
        {!watchedMovie ? 'Mark as watched' : 'Mark as not watched'}
      </p>
      <FontAwesomeIcon
        onClick={handleClick}
        className={`movie-checkbox-icon ${watchedMovie ? 'movie-checked' : ''}`}
        icon={faCheckCircle}
      />
    </div>
  );
};
