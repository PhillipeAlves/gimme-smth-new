import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { Movies, Footer } from '../Components';
import { Pagination } from '../Components/Pagination/Pagination';
import '../Stylesheets/Movies.css';
import '../Stylesheets/Queries/MQMovies.css';

export const MoviesPage = () => {
  const { movies, search } = useContext(Context);
  return (
    <>
      <div className='movies-page-banner'>
        <h1>
          {movies
            ? `Results for '${search}'`
            : 'Sorry, there were no matching results...'}
        </h1>
      </div>
      <Movies />
      <Pagination />
      <Footer />
    </>
  );
};
