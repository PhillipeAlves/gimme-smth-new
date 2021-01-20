import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import { Form } from './Form';

export const Search = () => {
  const { toggle } = useContext(Context);

  return (
    <div className={`search-container ${toggle ? 'shift-page' : ''}`}>
      <h1>I've seen this...</h1>
      <Form />
    </div>
  );
};
