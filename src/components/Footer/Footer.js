// eslint-disable-next-line
import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import styles from './styles'

function Footer() {
  return (
    <footer css={css`${styles.Footer}`}>
      © {new Date().getFullYear()}, Made possible with
      {` `}
      
      <a
        href="https://www.gatsbyjs.org"
        rel="noopener noreferrer"
        target="_blank"
      >
        Gatsby
      </a>

    </footer>
  )
}

export default Footer
