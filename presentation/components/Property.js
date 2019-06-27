import React from 'react'
import styled from 'styled-components'

import { Text } from 'spectacle'

const Wrapper = styled.div`
  text-align: left;
  margin-bottom: 0.5em;
`

const Label = styled.label`
  font-size: 0.75em;
`

export const Property = ({ label, value }) => (
  <Wrapper>
    <Label textColor='secondary'>
      {label}
      <Text size={6} textColor='tertiary'>
        {value}
      </Text>
    </Label>
  </Wrapper>
)