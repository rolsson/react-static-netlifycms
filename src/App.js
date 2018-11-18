import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
      <style jsx global>{`
        nav {
          width: 100%;
          background: #108db8;
        }
        nav a {
          color: white;
          padding: 1rem;
          display: inline-block;
        }
        .content {
          padding: 1rem;
        }
      `}</style>
    </div>
  </Router>
)

export default hot(module)(App)
// export default App
