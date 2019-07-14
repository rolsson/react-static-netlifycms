import React, { forwardRef, useState, useContext } from 'react'
import posed, { PoseGroup } from 'react-pose'

import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'

import Dynamic from './containers/Dynamic'
import Header from './components/Header'
import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { DrawerNav } from './components/Navbar'
import Tile from 'react-bulma-components/lib/components/tile'
import { MenuProvider, MenuContext } from './components/MenuContext'


import './app.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const MyComponent = forwardRef((props, ref) => (
  <div ref={ref} {...props} className="tile">
    {props.children}
  </div>
))

const TileDrawerMenu = posed(MyComponent)({
  open: { x: '0%' },
  closed: { x: '-100%' }
})

// <TileDrawerMenu pose={true ? 'open' : 'closed'}>
// <div>asdfsadf 1</div>
// <div>asdfsadf 2</div>
// <div>asdfsadf 3</div>
// </TileDrawerMenu>

function renderDrawer() {
  return (
    <div>
    <div>asdfsadf 1</div>
    <div>asdfsadf 2</div>
    <div>asdfsadf 3</div>
    </div>
  )
}

const App = () => {

  return (
    <Root>
      <MenuProvider>

        <Header heroTitle="Välkommen till Grå bokförlag" />

        <main>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </main>

        <Footer />
      </MenuProvider>
    </Root>
  )
}

// return (
//   <Root>
//     <Drawer renderDrawer={renderDrawer}>
//       <Header heroTitle="Välkommen till Grå bokförlag" />

//       <main>
//         <React.Suspense fallback={<em>Loading...</em>}>
//           <Router>
//             <Routes path="*" />
//           </Router>
//         </React.Suspense>
//       </main>

//       <Footer />
//     </Drawer>
//   </Root>
// )




// return (
//   <Root>
//     <Tile>
//       <Tile pose={true ? 'open' : 'closed'}>
//         <div>asdfsadf 1</div>
//         <div>asdfsadf 2</div>
//         <div>asdfsadf 3</div>
//       </Tile>
//       <Tile kind="child">
//         <Header
//           heroTitle="Välkommen till Grå bokförlag"
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={updateIsMenuOpen}/>

//         <main>
//           <React.Suspense fallback={<em>Loading...</em>}>
//             <Router>
//               <Routes path="*" />
//             </Router>
//           </React.Suspense>
//         </main>

//         <Footer />
//       </Tile>
//     </Tile>
//   </Root>)

export default App
