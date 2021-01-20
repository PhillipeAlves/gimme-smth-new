import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Paginate, Page, Button } from './';
import '../../Stylesheets/Pagination.css';

export const Pagination = () => {
  const {
    totalPages,
    currentPage,
    setCurrentPage,
    moviesURL,
    setMovies,
  } = useContext(Context);
  const disabledPrev = currentPage === 1;
  const disabledNext = currentPage === totalPages;
  const previous = currentPage - 1;
  const next = currentPage + 1;

  const handlePaginate = (value) =>
    Paginate(value, setCurrentPage, moviesURL, setMovies);

  return (
    <nav>
      <ul className='pagination'>
        <Button
          name='Prev'
          value={previous}
          disabled={disabledPrev}
          handlePaginate={handlePaginate}
        />
        <Page handlePaginate={handlePaginate} />
        <Button
          name='Next'
          value={next}
          disabled={disabledNext}
          handlePaginate={handlePaginate}
        />
      </ul>
    </nav>
  );
};
