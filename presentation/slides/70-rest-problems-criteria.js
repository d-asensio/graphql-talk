import React from 'react'
import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const RestProblemsCriteria = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      PEP 20, the Zen of <strike>Python</strike> Data
    </Heading>
    <List textColor='tertiary'>
      <ListItem>Beautiful is better than ugly.</ListItem>
      <ListItem>Explicit is better than implicit.</ListItem>
      <ListItem>Simple is better than complex.</ListItem>
      <ListItem>Complex is better than complicated.</ListItem>
      <ListItem><strike>Flat is better than nested.</strike></ListItem>
      <ListItem>Sparse is better than dense.</ListItem>
    </List>
  </Slide>
)
