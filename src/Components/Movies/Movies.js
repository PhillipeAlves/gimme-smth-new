import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { CheckBox, Poster, Rating, Description, DetailsBtn } from './';

export const Movies = () => {
  const { toggle, movies, moviesIDs } = useContext(Context);

  const getMovie = (movies, moviesIDs) => {
    const filteredResults = (() =>
      movies.filter((movie) => {
        if (moviesIDs) {
          return !moviesIDs.includes(movie.id);
        } else {
          return '';
        }
      }))();

    const mappedData = filteredResults.map(
      (
        { title, overview, vote_average, poster_path, release_date, id },
        key
      ) => {
        const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        return (
          <div className='movie-card' key={key}>
            <Poster title={title} poster={poster} release={release_date} />
            <div className='movie-info'>
              <h2>{title}</h2>
              <Rating vote_average={vote_average} />
              <Description overview={overview} />
              <DetailsBtn id={id} />
              <CheckBox id={id} />
            </div>
          </div>
        );
      }
    );

    return (
      <div className={`movies-container ${toggle ? 'shift-page' : ''}`}>
        {mappedData}
      </div>
    );
  };
  return <>{movies ? getMovie(movies, moviesIDs) : ''}</>;
};
