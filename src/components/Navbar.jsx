import '../style-components/Navbar.css';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import pageService from '../services/pages';

import Img from './Img';

function Navbar() {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [dropdownIsOpen, setDropdownIsOpen] = useState('');

  useEffect(() => {
    pageService
      .getAll()
      .then(initialPages => {
        setPages(initialPages)
      })
  }, []);

  const handleClick = () => {
    if (dropdownIsOpen === '') {
      setDropdownIsOpen('Navbar-enlaces--open');
    } else {
      setDropdownIsOpen('');
    }
  };

  return (
    <nav className='Navbar'>
      <section className='Navbar-content'>
        <Img classAditional='Navbar-logo' url='logo_opschool_ig' />

        <div className={`Navbar-enlaces ${dropdownIsOpen}`} id='headerNav'>
          {
            pages.map(page => {
              return (
                <Link key={page.id} to={page.path}>{page.page}</Link>
              );
            })
          }
        </div>

        <div className='Navbar-icon' id='barPrincipal' onClick={handleClick}>
          <i className='fas fa-bars'></i>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;