import React from 'react'
import {
  Slide,
  Heading,
  Text
} from 'spectacle'

export const RestProblemsNotDiscoverable = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Not discoverable by default
    </Heading>
    <br />
    <Text textColor='tertiary'>
      You have to implement a custom solution, or use a barely extended standard like JSON:API
    </Text>
  </Slide>
)