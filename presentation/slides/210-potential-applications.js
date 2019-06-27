import React from 'react'

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const PotentialApplications = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Potential applications
    </Heading>
    <br />
    <List textColor='tertiary'>
      <ListItem>API</ListItem>
      <ListItem>Front-end facade</ListItem>
      <ListItem>Service aggregation</ListItem>
    </List>
  </Slide>
)