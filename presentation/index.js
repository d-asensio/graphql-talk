import React from 'react'
import { createGlobalStyle } from 'styled-components'
import normalizeStyles from 'styled-normalize'

import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

import * as Slides from './slides'

const GlobalStyles = createGlobalStyle`
  ${normalizeStyles}

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`

const theme = createTheme(
  {
    primary: '#161e26',
    secondary: '#e534ab',
    tertiary: '#ffffff'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const Presentation = () => (
  <>
    <GlobalStyles />
    <Deck
      theme={theme}
    >
      {Object.values(Slides).map((Slide, key) =>
        <Slide key={key} />
      )}
      {/*
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Spectacle Boilerplate
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" fit bold>
          open the presentation/index.js file to get started
        </Text>
      </Slide>
      <Slide bgColor="secondary">
        <Image src={images.formidagon} width={800} />
      </Slide>
      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={6} textColor="primary" caps>
          Typography
        </Heading>
        <Heading size={1} textColor="secondary">
          Heading 1
        </Heading>
        <Heading size={2} textColor="secondary">
          Heading 2
        </Heading>
        <Heading size={3} textColor="secondary">
          Heading 3
        </Heading>
        <Heading size={4} textColor="secondary">
          Heading 4
        </Heading>
        <Heading size={5} textColor="secondary">
          Heading 5
        </Heading>
        <Text size={6} textColor="secondary">
          Standard text
        </Text>
      </Slide>
      <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={6} textColor="secondary" caps>
          Standard List
        </Heading>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Slide>
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <BlockQuote>
          <Quote>Example Quote</Quote>
          <Cite margin="10px 0 0 30px">Author</Cite>
        </BlockQuote>
      </Slide>
      <Slide>
        <Image src={images.goodWork} width={500} />
        <Notes>gifs work too</Notes>
      </Slide>
      */}
    </Deck>
  </>
)

export default Presentation
