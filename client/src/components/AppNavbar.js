import React, { Component } from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <div className="AppNavbar">
        <Navbar>
          <Container>
            <NavbarBrand href="/">TacoPlaces</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
