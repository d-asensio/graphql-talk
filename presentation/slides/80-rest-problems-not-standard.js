import React from 'react'
import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const RestProblemsNotStandard = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      No standard implementation
    </Heading>
    <br />
    <Heading size={5} textColor='tertiary' textAlign='left'>
      Some attempts:
    </Heading>
    <List textColor='tertiary'>
      <ListItem>https://jsonapi.org/</ListItem>
      <ListItem>http://standards.rest/</ListItem>
    </List>
  </Slide>
)
