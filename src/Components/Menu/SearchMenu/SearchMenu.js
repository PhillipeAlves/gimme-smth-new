import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const SearchMenu = () => {
  const { dropdown, setDropdown } = useContext(Context);

  return (
    <div onClick={() => setDropdown(!dropdown)} className='search-icon'>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon
        className={`dropdown-icon ${dropdown ? 'rotate-dropdown-icon' : ''}`}
        icon={faChevronDown}
      />
    </div>
  );
};
