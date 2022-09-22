import '../style-components/Main.css';
import Img from './Img';

function Main() {

  return (
    <main className='Main'>
      <div className="Main-primerParte">
        <p>Our<br/>
        Perfect<br/>
        School</p>
      </div>

      <Img classAditional='Main-logo'/>

      <div className="Main-down">
        <i className="fas fa-arrow-down"></i>
        <p>Scroll down</p>
      </div>
    </main>
  );
}

export default Main;