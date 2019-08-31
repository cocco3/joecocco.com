/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// eslint-disable-next-line
import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

function ProfilePhoto(props) {
  const {
    img
  } = props
 
  return (
    <div css={css`${styles.ProfilePhoto}`}>
      {img}
    </div>
  )
}

ProfilePhoto.propTypes = {
  img: PropTypes.element.isRequired
}

export default ProfilePhoto
