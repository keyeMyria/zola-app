// @flow
import React from 'react'
import Wrapper from '@components/Wrapper'
import Text from '@components/Text'
import Button from '@components/Button'
import { Texts, HeaderWrapper } from './styles'

type Props = {
  onNewProjectClick: () => any
}

const ProjectsHeader = ({ onNewProjectClick }: Props) => (
  <Wrapper padding="large">
    <HeaderWrapper>
      <Texts>
        <Text size="large">Your work</Text>
        <Text color="semiDark">Projects you collaborate on</Text>
      </Texts>
      <Button onClick={onNewProjectClick} bordered>
        Add new project
      </Button>
    </HeaderWrapper>
  </Wrapper>
)

export default ProjectsHeader
