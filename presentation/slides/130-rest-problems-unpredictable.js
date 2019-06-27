import React from 'react'
import {
  Slide,
  Heading,
  Text
} from 'spectacle'

export const RestProblemsUnpredictable = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Not predictable
    </Heading>
    <br />
    <Text textColor='tertiary' textAlign='left'>
    How would you parse the data returned by:
    </Text>
    <Text textColor='secondary' textAlign='left'>
      <code>POST /users/3</code>
    </Text>
  </Slide>
)