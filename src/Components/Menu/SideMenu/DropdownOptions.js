import React from 'react';

export const DropdownOptions = ({ title }) => {
  return (
    <div className='menu-list'>
      <a href='x' target='_blank' rel='noopener noreferrer'>
        <li>{title}</li>
      </a>
    </div>
  );
};
