import React from 'react';

class AppForm extends React.Component {
  render() {
    return (
      <form action="/" class="form-signin" method="post">
        <img
          class="mb-4"
          src="https://www.clipartwiki.com/clipimg/detail/8-82210_cute-tacos-clipart-bfb-taco-no-fish.png"
          alt=""
          width="72"
          height="auto"
        />
        <h1 class="h3 mb-3 font-weight-normal">
          Sign up to be notified when TacoPlaces Web App Launches!
        </h1>

        <input
          type="text"
          name="firstName"
          class="form-control top"
          placeholder="First Name"
          required
          autofocus
        />
        <input
          type="text"
          name="lastName"
          class="form-control middle"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          class="form-control bottom"
          placeholder="Email Address"
          required
        />

        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign Up
        </button>
        <p class="mt-5 mb-3">TacoPlaces</p>
      </form>
    );
  }
}

export default AppForm;
