import React from 'react'
import { withRouteData } from 'react-static'

import Columns from 'react-bulma-components/lib/components/columns'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import BookCard from './BookCard'

export default withRouteData(({ books }) => (
  <Container>
    <Heading>Böcker</Heading>
    <Columns>
      {[books[0], books[0], books[0], books[0], books[0], books[0], books[0]].map((book, idx) => (
        <Columns.Column size={3} key={idx}>
          <BookCard book={book} />
        </Columns.Column>
      ))}
    </Columns>
  </Container>
))
