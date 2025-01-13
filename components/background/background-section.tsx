import React from 'react';
import BackgroundDesktop from './background-desktop';
import BackgroundMobile from './background-mobile';

const Background = () => {
  return (
    <>
      <div className="hidden md:block">
        <BackgroundDesktop />
      </div>
      <div className="md:hidden">
        <BackgroundMobile />
      </div>
    </>
  );
};

export default Background;
