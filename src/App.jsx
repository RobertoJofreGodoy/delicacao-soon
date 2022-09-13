import DelicacaoPrincipal from './DelicacaoPrincipal';
import InstagramIcon from './InstagramIcon'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DelicacaoPrincipal className="App-logo" />
        <p>
          Nuestra página se encuentra en mantenimiento
        </p>
        <p className="mt-2">¡Pero puedes visitarnos en Instagram!</p>
        <div className="">
            <a
              className="App-link"
              href="https://www.instagram.com/delicacao_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span><InstagramIcon className="instagram"/></span>
              <span>delicacao_</span>
            </a>
        </div>
      </header>
    </div>
  );
}

export default App;
