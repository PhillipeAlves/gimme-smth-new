import React, { useEffect, useContext } from 'react';
import { Context } from '../../Context/Context';
import { MoviesList } from './MoviesList';

export const WatchedMovies = () => {
  const { checkedMovies, setLoading, setWatchedMovies } = useContext(Context);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let promises = checkedMovies.map((movies) =>
        fetch(movies).then((res) => res.json())
      );
      Promise.all(promises).then((res) => {
        setWatchedMovies(res);
      });
      setLoading(false);
    })();
  }, [checkedMovies, setWatchedMovies, setLoading]);

  return <MoviesList />;
};
