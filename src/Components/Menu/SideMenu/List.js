import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { list } from '../../../Helpers/Data';

export const List = () => {
  const { setOption, handleOptionToggle } = useContext(Context);
  const handleClick = (option) => {
    setOption(option);
    handleOptionToggle();
  };
  return Object.entries(list).map(([title, options], key) => {
    const option = title.replace(/ .*/, '');
    return options ? (
      <div onClick={() => handleClick(option)} key={key} className='menu-list'>
        <li>{title}</li>
        <div className='menu-list-see-more'>
          <span>{options}</span>
          <FontAwesomeIcon className='menu-list-icon' icon={faChevronRight} />
        </div>
      </div>
    ) : (
      <div key={key} className='menu-list'>
        <a
          href='/'
          target={title !== 'Home' ? '_blank' : ''}
          rel='noopener noreferrer'
        >
          <li>{title}</li>
        </a>
      </div>
    );
  });
};
