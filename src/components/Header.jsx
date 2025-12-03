import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: '#A7C7E7' }}
      variant="dark"
      collapseOnSelect
    >
      <Container>

        <LinkContainer to="/">
          <Navbar.Brand>Mescolare Apparel</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <LinkContainer to="/cart">
              <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/user">
              <Nav.Link><i className='fas fa-user'></i> User</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">

              <LinkContainer to="/clothes">
                <NavDropdown.Item>Clothes</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/shoes">
                <NavDropdown.Item>Shoes</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/others">
                <NavDropdown.Item>Others</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

              <LinkContainer to="/separated">
                <NavDropdown.Item>Separated link</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
