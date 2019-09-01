import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import PropTypes from 'prop-types'

import styles from './styles'

function Quote(props) {
  const {
    children
  } = props
 
  return (
    <blockquote
      css={css`${styles.Blockquote}`}
    >
      {children}
    </blockquote>
  )
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Quote
