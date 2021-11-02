import logo from './media/logo1.png';
import './styles/App.css';
import Pandora from './media/Pandora.jpg';
import Tyson from './media/tyson.jpg';

function App() {
  return (
    <div className="App">
      
            <header>

      <ul className="navbar">
          <li>
              <img src={logo} alt="Logo" className="logo"/>
                
          </li>
          
          <li>
              <button className="Button mainButton">Nuevo post</button>
          </li>
          
                  
          
              <li>
                  <div className= "buscar">
                  <input placeholder="Buscar una raza"/>
                  <i className="fas fa-search Button iconobusqueda"></i>
                  </div>    
              </li>
          
          <li>
              <button className="Button mainButton"> Registro </button>
              </li>
              <li>
                  <button className="Button ButtonSecundary">Login </button>
              </li>
      </ul>
      </header>
      <main>
      <section>
          <h1>Razas de perros</h1>
          <ul className="breedCardContainer">
              <li className="breedcard">
                  <div className= "contenedorimage">
                  <img src={Pandora} alt="Pandora"/>
                  </div>
                  <span className="breedtitle">Pandora</span>
                  
                  
              </li>
              <li className="breedcard">
                  <div className= "contenedorimage">
                  <img src={Tyson} alt="Tyson"/>
              </div>
              <span className="breedtitle">Tyson</span>
                  
              </li>
          </ul>
      </section>
      <section></section>
      </main>

    </div>
  );
}

export default App;
