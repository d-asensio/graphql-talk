import React from 'react'
import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const History1 = () => (
  <Slide>
    <Heading size={2} textColor='secondary'>
      GraphQL was...
    </Heading>
    <List textColor='tertiary'>
      <ListItem>Built by Facebook in 2012</ListItem>
      <ListItem>Released in 2015 to the community</ListItem>
    </List>
  </Slide>
)
