import React from 'react'

import { Link } from '@reach/router'

import Container from 'react-bulma-components/lib/components/container'
import Navbar from 'react-bulma-components/lib/components/navbar'

export default () => (
  <Navbar color="primary">
    <Container>
      <Navbar.Brand>
        <Link to="/" className="navbar-item">
          Grå förlag
        </Link>
        <Navbar.Burger
          // active={open}
          // onClick={() =>
              // this.setState(state => {
              // open: !state.open;
              // })
          // }
        />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Link to="/books" className="navbar-item">
            Böcker
          </Link>
          <Link to="/about" className="navbar-item">Om Oss</Link>
          <Navbar.Item dropdown hoverable>
            <Navbar.Link>Docs</Navbar.Link>  
            <Navbar.Dropdown>
              <Navbar.Item>Overview</Navbar.Item>
              <Navbar.Item>Elements</Navbar.Item>
              <Navbar.Item>Components</Navbar.Item>
              <hr className="navbar-divider" />
              <Navbar.Item>Version 0.7.2</Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
        </Navbar.Container>
      </Navbar.Menu>
    </Container>
  </Navbar>
)