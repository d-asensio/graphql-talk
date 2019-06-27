import React from 'react'
import {
  Slide,
  Heading,
  Text
} from 'spectacle'

export const RestProblemsCaching = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Cache control nightmare
    </Heading>
    <br />
    <Text textColor='tertiary'>
      Expires, Cache-Control, ETag and Last-Modified... WTF!
    </Text>
  </Slide>
)