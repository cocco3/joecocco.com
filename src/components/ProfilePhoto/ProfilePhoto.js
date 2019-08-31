/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// eslint-disable-next-line
import React from 'react'

import styles from './styles'

function ProfilePhoto(props) {
  const {
    src
  } = props

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "joe-cocco.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      css={css`${styles.ProfilePhoto}`}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

ProfilePhoto.propTypes = {
  src: PropTypes.string
}

export default ProfilePhoto
