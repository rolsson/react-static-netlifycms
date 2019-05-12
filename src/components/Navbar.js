import React from 'react'

import { Link } from '@reach/router'
import classnames from 'classnames'

import Container from 'react-bulma-components/lib/components/container'
import Navbar from 'react-bulma-components/lib/components/navbar'

const getLinkProps = (isActive, className) => ({
  className: classnames(className, 'navbar-item', { 'is-active': isActive })
})

const NavLink = ({ className, ...props }) => (
  <Link
    getProps={({ isCurrent }) => getLinkProps(isCurrent, className)}
    {...props}
  />
)

const TopNavLink = ({ className, ...props }) => (
  <Link
    getProps={({ isPartiallyActive }) =>
      getLinkProps(isPartiallyActive, className)
    }
    {...props}
  />
)

export default () => {
  // const [open, setOpen] = useState(false)
  const open = false
  return (
    <Navbar color="primary">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="navbar-itemx">
            Grå förlag
          </NavLink>
          <Navbar.Burger 
            active={open} 
            // onClick={() => setOpen(!open)} 
          />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <NavLink to="/books" className="navbar-itemx">
              Böcker
            </NavLink>
            <NavLink to="/about" className="navbar-item">
              Om Oss
            </NavLink>
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
          <Navbar.Container position="end" />
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}
