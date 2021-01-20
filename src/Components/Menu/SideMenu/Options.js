import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { options } from '../../../Helpers/Data';
import { DropdownOptions } from './DropdownOptions';

export const Options = () => {
  const { option, optionToggle } = useContext(Context);
  const hiddenOption = optionToggle
    ? 'slide-option-in menu-list-option'
    : 'slide-option-out menu-list-option';

  if (option) {
    const selectedOption = options[option];
    if (selectedOption) {
      const mappedOption = selectedOption.map((title, id) => {
        return <DropdownOptions key={id} title={title} />;
      });
      return <div className={hiddenOption}>{mappedOption}</div>;
    } else {
      return <div className={hiddenOption}></div>;
    }
  } else {
    return <div className={hiddenOption}></div>;
  }
};
