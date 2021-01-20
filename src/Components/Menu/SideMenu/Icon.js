import React, { useContext } from 'react';
import { Context } from '../../../Context/Context';
import { useLocation } from 'react-router-dom';

export const Icon = () => {
  const { toggle, handleToggle, setOption } = useContext(Context);
  const cross = toggle ? 'cross-bars' : '';
  const location = useLocation();
  const isMobile = (() => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  })();
  const mobile = isMobile && toggle ? 'mobile' : '';
  const barsColor = location.pathname !== '/' ? 'black-bars' : '';
  const shiftPage = toggle ? 'shift-icon' : '';
  const onClick = () => {
    handleToggle();
    setOption('');
  };

  return (
    <div className={`menu-icon ${shiftPage} ${mobile} `} onClick={onClick}>
      <div className={`bar1 ${cross} ${barsColor}`}></div>
      <div className={`bar2 ${cross} ${barsColor}`}></div>
      <div className={`bar3 ${cross} ${barsColor}`}></div>
    </div>
  );
};
