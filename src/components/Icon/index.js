// @flow
import React from 'react'
import { StyledIcon } from './styles'

type Props = {
  icon: string,
  className: string,
  width: string,
  height?: string,
  color: string
}

const Icon = ({ icon, className, width, height, color }: Props) => {
  if (!icon) {
    return null
  }

  return (
    <StyledIcon
      color={color}
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
      aria-hidden
      focusable="false"
    >
      <use xlinkHref={`#icon-${icon}`} />
    </StyledIcon>
  )
}

Icon.defaultProps = {
  width: '22px',
  className: '',
  color: 'dark'
}

export default Icon
