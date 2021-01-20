import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { CheckBox, Poster, Rating, Description, DetailsBtn } from '.';

export const MoviesList = () => {
  const { toggle, watchedMovies } = useContext(Context);
  const length = watchedMovies.length;

  const getMovie = (data) => {
    const mappedData = data.map(
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
      <div className={`watched-movies-container ${toggle ? 'shift-page' : ''}`}>
        {mappedData}
      </div>
    );
  };
  return (
    <div className='watched-movies'>
      <h1>Watched Movies</h1>
      {length !== 0 ? (
        <>
          {getMovie(watchedMovies)}
          <h2 className='total-watched-movies'>
            You have watched <span>{length}</span> movie{length > 1 ? 's' : ''}.
          </h2>
        </>
      ) : (
        <h2>You don't have any movie marked as watched yet.</h2>
      )}
    </div>
  );
};
