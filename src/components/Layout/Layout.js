import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import {
  Footer,
  Header
} from '../../components'

import './styles.css'
import styles from './styles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div css={css`${styles.Layout}`}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={css`${styles.Main}`}>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
