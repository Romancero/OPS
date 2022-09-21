import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Main from "./components/Main";

function App() {
  
  const [dropdownIsOpen, setDropdownIsOpen] = useState('');
  
  const handleClick = () => {
    if (dropdownIsOpen === '') {
      setDropdownIsOpen('Navbar-enlaces--open');
    } else {
      setDropdownIsOpen('');
    }
  };

  return (
    <div className='App'>
      <Navbar clickMangment={handleClick} active={dropdownIsOpen} />
      <Main />
    </div>
  );
}

export default App;