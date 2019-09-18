import React from 'react';

class FillOutForm extends React.Component {
  render() {
    return (
      <form action="/" class="form-signin" method="post">
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="Email Address"
          required
        />
        <button id="sign-up-btn" class="btn btn-lg btn-block" type="submit">
          Sign Up
        </button>
        <br />
        <p id="sign-up-text">
          Sign up to be notified when the TacoPlaces Web App Launches!
        </p>
      </form>
    );
  }
}

export default FillOutForm;
