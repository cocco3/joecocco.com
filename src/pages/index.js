import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Hero,
  Layout,
  SEO,
  Timeline
} from '../components'

function IndexPage(props) {

  const ProfilePhoto = <Img
    fluid={props.data.placeholderImage.childImageSharp.fluid}
  />

  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        img={ProfilePhoto}
      >
        <p>
          Just getting started!
          <br/>
          Come back soon 😁
        </p>
      </Hero>
    </Layout>
  )

  /* eslint-disable */
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        img={ProfilePhoto}
      >
        <p>
          Hello, world!
        </p>
        <p>
          Welcome to my little slice of the Internet
        </p>
      </Hero>
      <Timeline />
    </Layout>
    /* eslint-enable */
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "joe-cocco.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 256) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
