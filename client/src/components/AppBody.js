import React from 'react';
import AppForm from './AppForm';

class AppBody extends React.Component {
  render() {
    return (
      <div className="AppBody">
        <h1 id="title">TacoPlaces</h1>
        <br />
        <div className="info-container">
          <p id="info">
            TacoPlaces will be a web application (e.g. Yelp) that will allow you
            to find the best taco places near you. TacoPlaces will work on your
            desktop and mobile devices!
          </p>
        </div>
        <p id="coming">Coming soon...</p>
        <AppForm />
      </div>
    );
  }
}

export default AppBody;
