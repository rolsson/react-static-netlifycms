import React from 'react'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Hero from 'react-bulma-components/lib/components/hero'

import Breadcrumb from './Breadcrumb'
import Navbar from './Navbar'

export default ({heroTitle, heroSubTitle}) => (
  <header>
    <Navbar />

    {(heroTitle || heroSubTitle) && (
      <Hero color="primary" gradient>
        <Hero.Body>
          <Container>
            <Heading>
              Välkommen till Grå bokförlag
            </Heading>
            <Heading subtitle size={3}>
              Lite lättare att att läsa
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    )}

    <Breadcrumb />
  </header>
)