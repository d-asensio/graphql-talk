import React from 'react'
import {
  Slide,
  Heading,
  List,
  ListItem
} from 'spectacle'

export const RestProblemsCriteria2 = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      PEP 20, the Zen of <strike>Python</strike> Data
    </Heading>
    <List textColor='tertiary'>
      <ListItem>There should be one-- and preferably only one --obvious way to do it.</ListItem>
      <ListItem>Although that way may not be obvious at first unless you're Dutch.</ListItem>
      <ListItem>If the implementation is hard to explain, it's a bad idea.</ListItem>
      <ListItem>If the implementation is easy to explain, it may be a good idea.</ListItem>
    </List>
  </Slide>
)
