import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={AppBody} />
          </Switch>
          <AppFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
