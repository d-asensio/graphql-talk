import React from 'react'

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const MissingThings1 = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Maybe...
    </Heading>
    <br />
    <List textColor='tertiary'>
      <ListItem>Cache management</ListItem>
    </List>
  </Slide>
)