import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { URLS } from '../../../Helpers/Urls';

export const Dropdown = () => {
  const { setUrl, setSearchOption, dropdown, setDropdown } = useContext(
    Context
  );
  const urls = Object.keys(URLS);
  const handleDropdown = (path, option) => {
    setUrl(path);
    setSearchOption(option);
    setDropdown(!dropdown);
  };

  return (
    <ul
      className={`dropdown-options ${
        dropdown ? 'dropdown-options-visible' : ''
      }`}
    >
      {urls.map((url, key) => {
        return (
          <li key={key} onClick={() => handleDropdown(URLS[url], url)}>
            {url}
          </li>
        );
      })}
    </ul>
  );
};
