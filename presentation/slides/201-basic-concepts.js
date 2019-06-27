import React from 'react'

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const BasicConcepts1 = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      There are a few
    </Heading>
    <br />
    <List textColor='tertiary'>
      <ListItem>Schema</ListItem>
      <ListItem>Query</ListItem>
      <ListItem>Mutation</ListItem>
      <ListItem>Subscription</ListItem>
    </List>
  </Slide>
)