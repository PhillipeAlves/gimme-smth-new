import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';
import movieTrailer from 'movie-trailer';

export const Poster = ({ title, poster, release }) => {
  const [trailer, setTrailer] = useState('');
  const [unavailableTrailer, setUnavailableTrailer] = useState(false);

  useEffect(() => {
    if (release) {
      (async () => {
        await movieTrailer(title, release.slice(0, 4))
          .then((response) => setTrailer(response))
          .catch(() => {
            setUnavailableTrailer(true);
          });
      })();
    }
  }, [title, release]);

  return (
    <div
      className='movie-poster'
      style={{
        backgroundImage: `url(${poster})`,
      }}
    >
      {unavailableTrailer ? (
        <div className='movie-play-btn trailer-btn-unavailable'>
          <FontAwesomeIcon
            className='movie-play-icon trailer-unavailable-icon'
            icon={faTimes}
          />
          <p className='trailer-unavailable-text'>Trailer unavailable!</p>
        </div>
      ) : (
        <a
          href={trailer}
          target={trailer ? '_blank' : ''}
          rel='noopener noreferrer'
          className='movie-play-btn'
        >
          <FontAwesomeIcon className='movie-play-icon' icon={faPlay} />
        </a>
      )}
    </div>
  );
};
