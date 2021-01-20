import React, { useEffect, useState, createContext } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  // = API DATA
  const [movies, setMovies] = useState('');
  const [moviesURL, setMoviesURL] = useState('');
  const [trailer, setTrailer] = useState('');
  const [checkedMovies, setCheckedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [moviesIDs, setMoviesIDs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&query=`
  );

  // = PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [homePage, setHomePage] = useState(false);

  // = GENERAL STATE MANAGEMENT
  const [toggle, setToggle] = useState(false);
  const [option, setOption] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState('');
  const [searchOption, setSearchOption] = useState('');
  const [search, setSearch] = useState('');
  const [optionToggle, setOptionToggle] = useState(false);

  // = HELPER FUNCTIONS
  const handleToggle = () => setToggle(!toggle);
  const handleOptionToggle = () => setOptionToggle(!optionToggle);
  const markMovieAsChecked = (movie, id) => {
    setCheckedMovies([...checkedMovies, movie]);
    setMoviesIDs([...moviesIDs, id]);
  };
  const markMovieAsUnchecked = (movie, id) => {
    setCheckedMovies(
      checkedMovies.filter((checkedMovie) => checkedMovie !== movie)
    );
    setMoviesIDs(moviesIDs.filter((moviesID) => moviesID !== id));
  };

  // PERSISTENT DATA
  useEffect(() => {
    const store = localStorage.getItem('movies');
    if (store) {
      const [
        checkedMovies,
        movies,
        moviesURL,
        currentPage,
        totalPages,
        moviesIDs,
        search,
      ] = JSON.parse(store);
      setMovies(movies);
      setMoviesURL(moviesURL);
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
      setCheckedMovies(checkedMovies);
      setMoviesIDs(moviesIDs);
      setSearch(search);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'movies',
      JSON.stringify([
        checkedMovies,
        movies,
        moviesURL,
        currentPage,
        totalPages,
        moviesIDs,
        search,
      ])
    );
  }, [
    checkedMovies,
    movies,
    moviesURL,
    currentPage,
    totalPages,
    moviesIDs,
    search,
  ]);

  return (
    <Context.Provider
      value={{
        url,
        setUrl,
        totalPages,
        setTotalPages,
        moviesURL,
        setMoviesURL,
        movies,
        setMovies,
        watchedMovies,
        setWatchedMovies,
        trailer,
        setTrailer,
        loading,
        setLoading,
        toggle,
        handleToggle,
        moviesIDs,
        setMoviesIDs,
        selected,
        setSelected,
        option,
        setOption,
        searchOption,
        setSearchOption,
        dropdown,
        setDropdown,
        optionToggle,
        handleOptionToggle,
        currentPage,
        setCurrentPage,
        checkedMovies,
        setCheckedMovies,
        markMovieAsChecked,
        markMovieAsUnchecked,
        homePage,
        setHomePage,
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
