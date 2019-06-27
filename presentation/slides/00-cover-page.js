import React from 'react'
import {
  Slide,
  Heading,
  Image
} from 'spectacle'

import { getAsset } from '../helpers'

export const CoverPage = () => (
  <Slide>
    <Image src={getAsset('GraphQL-logo.svg')} width='40%' />
    <Heading size={1} textColor='secondary'>
      GraphQL
    </Heading>
    <Heading size={5} textColor='tertiary'>
      A data query language for your API
    </Heading>
  </Slide>
)
