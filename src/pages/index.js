import React from 'react'

import {
  Hero,
  Layout,
  SEO,
  Timeline
} from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Timeline />
  </Layout>
)

export default IndexPage
