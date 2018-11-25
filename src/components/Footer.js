import React from 'react'

import Columns from 'react-bulma-components/lib/components/columns'
import Container from 'react-bulma-components/lib/components/container'
import Footer from 'react-bulma-components/lib/components/footer'

import Breadcrumb from './Breadcrumb'

export default () => (
  <footer>

    <Breadcrumb />

    <Footer className="is-dark">
      <Container>
        <Columns>
          <Columns.Column>
            <h5>Grå bokförlag</h5>
            <address>
              Gatangatan 123<br/>
              123 12 Ort<br/>
              010 - 12 34 56<br/>
              info@domain.domain
            </address>
          </Columns.Column>
          <Columns.Column>
            Column 2
          </Columns.Column>
          <Columns.Column>
            Column 3
          </Columns.Column>
          <Columns.Column>
            Column 4
          </Columns.Column>
        </Columns>  
      </Container>
    </Footer>

    <Footer>
      <Container>
        <p>Copyright © 2018 Grå bokförlag. Alla rättigheter reserverade. </p>
      </Container>
    </Footer>
  </footer>
)