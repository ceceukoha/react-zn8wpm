import './App.css';
import React from 'react';
import Routing from './Routes/Routing';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <span>Oracle School</span>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/users'}>Students</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routing />
      </main>

      <footer className="footer">
        <div>
          <h3>conect with us</h3>
          <ul>
            <li>Facebook </li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Intagram</li>
          </ul>
        </div>
        <div>
          <h3>Affiliated with</h3>
          <ul>
            <li>lorem</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
