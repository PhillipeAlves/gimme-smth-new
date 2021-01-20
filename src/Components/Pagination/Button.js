import React from 'react';

export const Button = ({ name, value, disabled, handlePaginate }) => {
  return (
    <button
      onClick={() => handlePaginate(value)}
      className={`page-item ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
