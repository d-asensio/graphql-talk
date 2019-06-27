import React from 'react'

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const GraphQLSolutionQueries1 = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Solved problems
    </Heading>
    <br />
    <List textColor='tertiary'>
      <ListItem><strike>Not predictable</strike></ListItem>
      <ListItem><strike>Resource-focused</strike></ListItem>
      <ListItem><strike>Version nightmare</strike></ListItem>
      <ListItem><strike>Not really standarized</strike></ListItem>
      <ListItem><strike>Error management</strike></ListItem>
    </List>
  </Slide>
)