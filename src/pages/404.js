import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Hero,
  Layout,
  SEO
} from '../components'

function NotFoundPage(props) {

  const ProfilePhoto = <Img
    fluid={props.data.placeholderImage.childImageSharp.fluid}
  />

  return (
    <Layout>
      <SEO title="404: Not found" />
      <Hero
        img={ProfilePhoto}
      >
        <p>
          Dakota says,
        </p>
        <p>
          "What are you doing here? I hope you brought snacks!"
        </p>
      </Hero>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "dakota.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
