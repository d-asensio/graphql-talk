import React from 'react'
import styled from 'styled-components'

import {
  Slide,
  Image
} from 'spectacle'

import { getAsset } from '../helpers'

import { HorizontalGrid, Avatar, Property  } from '../components'

export const Me = () => (
  <Slide>
    <HorizontalGrid>
      <HorizontalGrid.Side>
        <Avatar>
          <Image
            src={getAsset('me.jpg')}
          />
        </Avatar>
      </HorizontalGrid.Side>
      <HorizontalGrid.Content>
        <Property
          label='Name'
          value='David Asensio Cañas'
        />
        <Property
          label='Age'
          value='24'
        />
        <Property
          label='Works at'
          value='Koobin'
        />
        <Property
          label='Position (hypster version)'
          value='Lead front-end developer'
        />
      </HorizontalGrid.Content>
    </HorizontalGrid>
  </Slide>
)
