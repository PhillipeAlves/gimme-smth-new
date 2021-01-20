import React from 'react';
import axios from 'axios';

export const Paginate = async (value, setCurrentPage, moviesURL, setMovies) => {
  setCurrentPage(value);
  try {
    const { data: response } = await axios.get(`${moviesURL}&page=${value}`);
    const movies = response.results.filter(
      (movie) => movie.poster_path && movie.overview
    );
    setMovies(movies);
    window.location.replace(`/movies/${value}`);
  } catch (error) {
    console.error(error);
  }
  return <></>;
};
