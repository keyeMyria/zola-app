// @flow
import React from 'react'
import getAccessToken from '@helpers/getAccessToken'
import redirectTo from '@helpers/redirectTo'

type Props = {}

const withNoAuthentication = (Component: any) => {
  class NoAuthentication extends React.Component<Props> {
    static async getInitialProps(context: any = {}) {
      const accessToken = getAccessToken(context)

      if (accessToken) {
        redirectTo(context, '/')
      }

      return {}
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return NoAuthentication
}

export default withNoAuthentication