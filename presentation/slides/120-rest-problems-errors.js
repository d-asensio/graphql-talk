import React from 'react'
import {
  Slide,
  Heading,
  Image
} from 'spectacle'

import { getAsset } from '../helpers'

export const RestProblemsErrors = () => (
  <Slide>
    <Heading size={3} textColor='secondary'>
      Error management nightmare
    </Heading>
    <br />
    <Image src={getAsset('http-codes-meme.jpg')} width='50%' />
  </Slide>
)