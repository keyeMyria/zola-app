// @flow
import React, { Component } from 'react'
import Wrapper from '@components/Wrapper'
import NewProjectForm from '@components/NewProjectForm'
import type { Locale } from '@types/Locale'

type Props = {
  locales: Array<Locale>,
  onSubmit: () => any,
  errors: Array<any>,
  isLoading: boolean
}

type State = {
  selectedOption: string | null
}

class NewProjectModal extends Component<Props, State> {
  state = {
    selectedOption: null
  }

  onApply = (options: Array<string>) => {
    this.setState(state => ({ ...state, selectedOption: options[0] }))
  }

  render() {
    const { locales, onSubmit, errors, isLoading } = this.props
    let normalizedLocales = [...locales]
    // TODO: We'll need to remove that size limit when the list will be shorter
    normalizedLocales = normalizedLocales
      .splice(0, 100)
      .map(l => ({ text: l.name, value: String(l.id) }))

    return (
      <Wrapper padding="regular">
        <NewProjectForm
          locales={normalizedLocales}
          onSubmit={onSubmit}
          errors={errors}
          isLoading={isLoading}
        />
      </Wrapper>
    )
  }
}

export default NewProjectModal