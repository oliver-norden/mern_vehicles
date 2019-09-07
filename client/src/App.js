import React from 'react';
import './App.css';
import { Container } from 'reactstrap';

import AppNavbar from './components/Navbar';
import Vehicles from './components/Vehicles';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
        <Container>
          <Vehicles />
        </Container>
    </div>
  );
}

export default App;
