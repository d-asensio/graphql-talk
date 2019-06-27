import React from 'react'
import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const RestProblemsResourceFocused = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Is resource-focused
    </Heading>
    <br />
    <List textColor='tertiary'>
      <ListItem>Multiple round-trips to fetch the data</ListItem>
      <ListItem>Relations are difficult to manage</ListItem>
    </List>
  </Slide>
)