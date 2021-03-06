// @flow
import React from 'react'
import Text from '@components/Text'
import { StyledLoaderWrapper, StyledLoader } from './styles'

type Props = {
  isCentered: boolean,
  withText: boolean,
  isDark: boolean
}

const Loader = (props: Props) => {
  const { withText, isCentered, isDark } = props

  return (
    <StyledLoaderWrapper isCentered={isCentered}>
      <StyledLoader {...props} />
      {withText && (
        <Text size="regular" color={isDark ? 'dark' : 'light'}>
          Loading
        </Text>
      )}
    </StyledLoaderWrapper>
  )
}

Loader.defaultProps = {
  withText: false,
  isCentered: false,
  isDark: false
}

export default Loader
