/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// eslint-disable-next-line
import React from 'react'
import PropTypes from 'prop-types'

import {
  ProfilePhoto
} from '../../components'

import styles from './styles'

function Hero(props) {
  const {
    children,
    img
  } = props

  return (
    <div css={css`${styles.Hero}`}>
      <div css={css`${styles.HeroStart}`}>
        {children}
      </div>
      <div css={css`${styles.HeroEnd}`}>
        <ProfilePhoto
          img={img}
        />
      </div>
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.element.isRequired
}

export default Hero
