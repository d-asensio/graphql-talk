import React from 'react'
import {
  Slide,
  Heading,
  Text
} from 'spectacle'

export const RestProblemsVersioning = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Versioning nightmare
    </Heading>
    <br />
    <Text textColor='tertiary'>
      The version number should go in the path or in the header?
    </Text>
  </Slide>
)
