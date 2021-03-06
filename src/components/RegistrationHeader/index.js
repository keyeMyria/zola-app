import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Logo from '@components/Logo'
import { HeaderTexts } from './styles'

const RegistrationHeader = () => {
  return (
    <div>
      <Wrapper center width="small" mTop="huge" contentCentered>
        <Logo />
      </Wrapper>
      <Wrapper mLeft="regular" mTop="enormous">
        <HeaderTexts>
          <Text size="large">Register a new account</Text>
          <Text color="semiDark">Zola is made for you</Text>
        </HeaderTexts>
      </Wrapper>
    </div>
  )
}

export default RegistrationHeader
