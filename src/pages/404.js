import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Hero,
  Layout,
  Quote,
  SEO
} from '../components'



function GetRandomPhrase() {

  const PHRASES = [
    'What are you doing here? I hope you brought snacks!',
    'You woke me up for this?',
    `Are you lost? I'm calling Dad!`
  ]

  const length = PHRASES.length

  const index = Math.floor(Math.random() * (length + 1))

  return PHRASES[index]
}

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
        <Quote>
          {GetRandomPhrase()}
        </Quote>
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
