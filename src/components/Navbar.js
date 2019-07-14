import React, { useState, useContext, forwardRef } from 'react'
import posed, { PoseGroup } from "react-pose";

import { Link } from '@reach/router'
import classnames from 'classnames'

import Container from 'react-bulma-components/lib/components/container'
import Navbar from 'react-bulma-components/lib/components/navbar'
import { DrawerContext } from "./Drawer";
import { MenuContext } from "./MenuContext";

const getLinkProps = (isActive, className) => ({
  className: classnames(className, 'navbar-item', { 'is-active': isActive }), 
})

const NavLink = ({ className, ...props }) => (
  <Link
    getProps={({ isCurrent }) => getLinkProps(isCurrent, className)}
    {...props}
  />
)

// const TopNavLink = ({ className, ...props }) => (
//   <Link
//     getProps={({ isPartiallyActive }) =>
//       getLinkProps(isPartiallyActive, className)
//     }
//     {...props}
//   />
// )

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Sidebar = posed.nav({
  open: { x: '0%', staggerChildren: 100 },
  closed: { x: '-100%' }
})

const NavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
})

export const DrawerNav = forwardRef(({ style, isMenuOpen, navItems, ...props }, ref) => (
  <Sidebar pose={isOpen ? 'open' : 'closed'}>
    <ul ref={ref} style={{style}}>
      {navItems.map(({ url, name }) => (
        <NavLink to={url} {...props}>
          {name}
        </NavLink>
      ))}
    </ul>
  </Sidebar>
))

const NavbarMenu = posed.div({
	visible: {
    height: '100%',
    width: '100%',
		// flip: true,
		applyAtStart: {
			display: 'block',
		},
	},
	hidden: {
		height: '1px',
    width: '100%',
		// flip: true,
		applyAtEnd: {
			display: 'none',
		},
	},
})

const navbarMenuStyle = {
  // position: 'absolute',
  // backgroundColor: 'white',
  // display: 'block',
  padding: 0,
  margin: 0,
  overflow: 'hidden'
}

const shadeStyle = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: -23,
}

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});


export default ({isMenuOpen: x, setIsMenuOpen: y}) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [state, setState] = useContext(DrawerContext);
  const [state, setState] = useContext(MenuContext);
  
  const props = {
    onClick: () => setState({open: false}),
  }

  return (
    <Navbar color="primary" active={state.open}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" {...props}>
            Grå förlag
          </NavLink>
          <Navbar.Burger
            onClick={(event) => {
              setState({...state, open: !state.open})
            }}
          />
        </Navbar.Brand>
        <NavbarMenu className="navbar-menu" style={navbarMenuStyle}>
          <Navbar.Container>
            <NavLink to="/books" {...props}>
              Böcker
            </NavLink>
            <NavLink to="/about" {...props}>
              Om Oss
            </NavLink>
            <Navbar.Item dropdown hoverable className="is-expanded">
              <Navbar.Link>Docs</Navbar.Link>
              <Navbar.Dropdown className="is-expanded">
                <Navbar.Item className="is-expanded">Overview</Navbar.Item>
                <Navbar.Item>Elements</Navbar.Item>
                <Navbar.Item>Components</Navbar.Item>
                <hr className="navbar-divider" />
                <Navbar.Item>Version 0.7.2</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end" />
        </NavbarMenu>
      </Container>
    </Navbar>
  )
}

// {state.open && (<Shade key="shade" style={shadeStyle} />)}
// 