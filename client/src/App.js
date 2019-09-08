import React, { Component } from 'react';

import './App.css';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/Navbar';
import Vehicles from './components/Vehicles';
import VehicleModal from './components/VehicleModal';
import { loadUser } from './actions/authActions';


class App extends Component {
  componentDidMount() {
      store.dispatch(loadUser());
  }

  render() {
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
}

export default App;
