import React, { useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import { useHistory } from 'react-router-dom';
import { SearchMenu, Dropdown } from '../Menu/SearchMenu';
import ISO6391 from 'iso-639-1';
import axios from 'axios';

export const Form = () => {
  const {
    url,
    setMovies,
    setTotalPages,
    setMoviesURL,
    searchOption,
    setCurrentPage,
    setLoading,
    setSearch,
  } = useContext(Context);
  const [input, setInput] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      let search = input;
      setSearch(input);
      if (searchOption === 'language') {
        search = ISO6391.getCode(input);
      }
      setMoviesURL(`${url}${search}`);
      try {
        setLoading(true);
        const { data: response } = await axios.get(`${url}${search}`);
        const movies = response.results.filter(
          (movie) => movie.poster_path && movie.overview
        );
        setTotalPages(response.total_pages);
        setMovies(movies);
        setCurrentPage(1);
        setLoading(false);
        history.push(`/movies/1`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form className='search-bar' onSubmit={onSubmit}>
      <input
        placeholder={`Search by${searchOption ? ` ${searchOption}...` : '...'}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchMenu />
      <Dropdown />
    </form>
  );
};
