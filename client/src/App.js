import React from 'react';
import './App.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/Navbar';
import Vehicles from './components/Vehicles';
import VehicleModal from './components/VehicleModal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppNavbar />
          <Container>
            <Vehicles />
            <VehicleModal />
          </Container>
      </Provider>
    </div>
  );
}

export default App;
