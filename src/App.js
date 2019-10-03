import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Facturas from './components/facturas'
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="col-12">
          <div className="card">
            <nav className="navbar navbar-light bg-primary">
              <h3 className="navbar-text text-white" >
                  BiGo
              </h3>
            </nav>
            <h1 className="float-left">Pagar facturas</h1>
            <Facturas/>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default App;
