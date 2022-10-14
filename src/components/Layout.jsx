import '../style-components/Layout.css';

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';

const Layout = () => {
  let [darkmode, setDarkmode] = useState(localStorage.getItem('dark-mode') !== null ? localStorage.getItem('dark-mode') : 'light');
  if (localStorage.getItem('dark-mode') === null) {
    localStorage.setItem('dark-mode', 'light');
    console.log(localStorage.getItem('dark-mode'));
  } else {
    localStorage.setItem('dark-mode', darkmode);
    console.log(localStorage.getItem('dark-mode'));
  }

  const activeDarkmode = () => {
    setDarkmode(darkmode === 'dark'? 'light' : 'dark');
  };

  return (
    <div className={`Layout Layout-${darkmode}mode`}>
      <Navbar />
      <button className='Layout-button' onClick={activeDarkmode} >{`Activar ${darkmode === 'dark'? 'Light' : 'Dark'}-Mode`}</button>
      <Outlet />
    </div>
  );
};

export default Layout;