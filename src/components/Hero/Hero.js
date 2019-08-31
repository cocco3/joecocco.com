/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// eslint-disable-next-line
import React from 'react'

import {
  ProfilePhoto
} from '../../components'

import styles from './styles'

function Hero() {

  return (
    <div css={css`${styles.Hero}`}>
      <div css={css`${styles.HeroStart}`}>
        Hello, World!
      </div>
      <div css={css`${styles.HeroEnd}`}>
        <ProfilePhoto />
      </div>
    </div>
  )
}

export default Hero
