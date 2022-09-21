import '../style-components/Main.css';
import Img from './Img';

function Main() {

  return (
    <main className='Main'>
      <div class="main__primerParte">
        <p>Our<br/>
        Perfect<br/>
        School</p>
      </div>

      <Img classAditional='main__logo'/>

      <div class="main__down">
        <i class="fas fa-arrow-down"></i>
        <p>Scroll down</p>
      </div>
    </main>
  );
}

export default Main;