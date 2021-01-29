import logo from './logo.png';
import './App.css';

import Navbar from './App/Views/navbar'
import Site from './App/Views/site'

function App() {
  return (<>
      <Navbar logo={logo}/>    
      <Site/>
      <footer className="footer shadow">
        <div className="text-center p-3">
          © Réalisé par :
          <a className="text-dark"> Nils Lopez Martin pour le cours de Math-6h</a>
        </div>
      </footer>
    </>
  );
}

export default App;
