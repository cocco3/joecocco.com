// eslint-disable-next-line
import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './styles'

function Header() {
  return (
    <header css={css`${styles.Header}`}>
      <h1 css={css`${styles.Title}`}>
        <Link
          to="/"
          css={css`${styles.Link}`}
        >
          <span css={css`${styles.FirstName}`}>Joe</span>
          {` `}
          <span css={css`${styles.LastName}`}>Cocco</span>
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
