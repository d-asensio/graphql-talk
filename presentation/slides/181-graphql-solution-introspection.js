import React from 'react'

import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const GraphQLSolutionIntrospection1 = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Solved problems
    </Heading>
    <br />
    <List textColor='tertiary'>
      <ListItem><strike>Documentation is difficult to manage</strike></ListItem>
      <ListItem><strike>Not discoverable by default</strike></ListItem>
    </List>
  </Slide>
)