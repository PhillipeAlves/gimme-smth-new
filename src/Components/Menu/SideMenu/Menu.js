import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { List, Options, Header } from '.';

export const Menu = () => {
  const { toggle } = useContext(Context);
  const hiddenMenu = toggle ? 'slide-menu-in' : 'slide-menu-out';

  return (
    <div className={`menu ${hiddenMenu}`}>
      <Header />
      <ul>
        <List />
        <Options />
      </ul>
    </div>
  );
};
