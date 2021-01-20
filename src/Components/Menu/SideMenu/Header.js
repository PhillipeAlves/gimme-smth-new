import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const { option, setOption, handleOptionToggle } = useContext(Context);

  const handleClick = () => {
    handleOptionToggle();
    setTimeout(() => setOption(''), 500);
  };

  return (
    <>
      {option ? (
        <>
          <h3>{option}</h3>
          <FontAwesomeIcon
            onClick={handleClick}
            className='return-to-list-icon'
            icon={faChevronRight}
          />
        </>
      ) : (
        <h3>Menu</h3>
      )}
    </>
  );
};
