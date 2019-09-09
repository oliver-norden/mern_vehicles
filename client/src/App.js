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
import { windowResize } from './actions/appActions';
import AppError from './components/AppError';


class App extends Component {
  componentDidMount() {
      store.dispatch(loadUser());
      window.addEventListener("resize", () => store.dispatch(windowResize(window.innerWidth)));
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <AppNavbar />
            <Container>
              <AppError />
              <Vehicles />
              <VehicleModal />
            </Container>
        </Provider>
      </div>
    );
  }
}

export default App;
