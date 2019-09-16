import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppBody />
        <AppFooter />
      </div>
    );
  }
}

export default App;
