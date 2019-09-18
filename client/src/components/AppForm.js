import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FillOutForm from './FillOutForm';
import ThankYou from './ThankYou';

class AppForm extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/thankyou" component={ThankYou} />
          <Route exact path="/" component={FillOutForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppForm;
