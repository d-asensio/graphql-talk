import React from 'react'

import {
  Slide,
  Heading
} from 'spectacle'

import urlencode from 'urlencode'
import Iframe from 'react-iframe'

const query = urlencode(`
  {
    __type(name: "Pokemon") {
      name
      fields {
        name
        type {
          name
        }
      }
    }
  }
`)

export const GraphQLSolutionIntrospection = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Introspection
    </Heading>
    <br />
    <Iframe
        url={`https://graphql-pokemon.now.sh/?query=${query}`}
        height='60vh'
        position='relative'
    />
  </Slide>
)