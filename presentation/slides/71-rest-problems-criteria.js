import React from 'react'
import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const RestProblemsCriteria1 = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      PEP 20, the Zen of <strike>Python</strike> Data
    </Heading>
    <List textColor='tertiary'>
      <ListItem>Readability counts.</ListItem>
      <ListItem>Special cases aren't special enough to break the rules.</ListItem>
      <ListItem>Although practicality beats purity.</ListItem>
      <ListItem>Errors should never pass silently.</ListItem>
      <ListItem>Unless explicitly silenced.</ListItem>
      <ListItem>In the face of ambiguity, refuse the temptation to guess.</ListItem>
    </List>
  </Slide>
)
