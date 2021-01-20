import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { generatePageRange } from '../../Helpers/functions';

export const Page = ({ handlePaginate }) => {
  const { totalPages, currentPage } = useContext(Context);
  const pageRange = generatePageRange(currentPage, totalPages);

  return (
    <>
      {pageRange.map((page, key) => {
        if (page !== 0) {
          if (page === currentPage) {
            return (
              <li
                key={key}
                onClick={() => handlePaginate(page)}
                className='page-item current-page'
              >
                {page}
              </li>
            );
          } else {
            return (
              <li
                key={key}
                onClick={() => handlePaginate(page)}
                className='page-item'
              >
                {page}
              </li>
            );
          }
        } else {
          return '';
        }
      })}
    </>
  );
};
