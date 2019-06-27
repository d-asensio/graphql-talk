import React from 'react'

import {
  Slide,
  Heading
} from 'spectacle'

import urlencode from 'urlencode'
import Iframe from 'react-iframe'

const query = urlencode(`
  {
    pokemon(name: "Pikachu") {
      id
      number
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`)

export const GraphQLSolutionQueries = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Strongly typed queries
    </Heading>
    <br />
    <Iframe
        url={`https://graphql-pokemon.now.sh/?query=${query}`}
        height='60vh'
        position='relative'
    />
  </Slide>
)