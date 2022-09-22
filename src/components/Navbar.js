import '../style-components/Navbar.css';
import Img from './Img';

function Navbar({ clickMangment, active }) {
  return (
    <nav className='Navbar'>
      <section className='Navbar-content'>
        <Img classAditional='Navbar-logo' />

        <div className={`Navbar-enlaces ${active}`} id='headerNav'>
          <a href='#' title='Home'>Home</a>
          <a href='#' title='School'>School</a>
          <a href='#' title='Events'>Events</a>
          <a href='#' title='Noveltys'>Noveltys</a>
          <a href='#' title='Contact'>Contact</a>
        </div>

        <div className='Navbar-icon' id='barPrincipal' onClick={clickMangment}>
          <i className='fas fa-bars'></i>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;