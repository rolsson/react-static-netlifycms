import React from 'react'
import { Root, Routes } from 'react-static'
// import { hot } from 'react-hot-loader'
// import { Link } from '@reach/router'

import Header from './components/Header'
import Footer from './components/Footer'

import './app.scss'

const App = () => (
  <Root>
    <Header heroTitle="Välkommen till Grå bokförlag"/>
          
    <main>
      <Routes />
    </main>

    <Footer />
  </Root>
)

export default App
