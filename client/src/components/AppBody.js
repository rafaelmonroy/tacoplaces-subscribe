import React from 'react';
import AppForm from './AppForm';

class AppBody extends React.Component {
  render() {
    return (
      <div className="AppBody">
        <h1 id="title">TacoPlaces</h1>
        <p id="coming">Coming soon...</p>
        <AppForm />
      </div>
    );
  }
}

export default AppBody;
