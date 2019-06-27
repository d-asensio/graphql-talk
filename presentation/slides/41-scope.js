import React from 'react'
import {
  Slide,
  Heading,
  Text
} from 'spectacle'

export const Scope1 = () => (
  <Slide textAlign='left'>
    <Heading size={2} textColor='secondary'>
      This is mainly a philosophical talk
    </Heading>
    <br />
    <Text textColor='tertiary'>
      I opine that before getting into the nitty-gritty of any technology, it's important to understand the context of it and what is the set of problems it attempts to solve.
    </Text>
  </Slide>
)
