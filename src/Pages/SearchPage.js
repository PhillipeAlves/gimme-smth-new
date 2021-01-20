import React from 'react';
import { Search, Footer } from '../Components';
import { WatchedMovies } from '../Components/Movies/WatchedMovies';
import { OverLayer } from './Overlayer';
import '../Stylesheets/Search.css';
import '../Stylesheets/Queries/MQSearch.css';

export const SearchPage = () => {
  return (
    <>
      <div className='search-page'>
        <OverLayer />
        <Search />
      </div>
      <WatchedMovies />
      <Footer />
    </>
  );
};
