/** @jsx jsx */
import { css, jsx } from '@emotion/core'

// eslint-disable-next-line
import React from 'react'

import styles from './styles'

function Timeline() {

  return (
    <>
      <h1>
        Where I've Been
      </h1>
      <ul css={css`${styles.Timeline}`}>
        <li>2018 - Team grows to include Design System, Accessibility, and React Components</li>
        <li>2015 - Individual Contributor -> Manager</li>
        <li>2014 - Started DocuSign's Design System</li>
        <li>2014 - Move to San Francisco</li>
        <li>2013 - Cartavi acquired by DocuSign!</li>
        <li>2012 - Finished Chicago marathon in 2:58:00</li>
        <li>2010 - First front end developer at Cartavi</li>
        <li>2008 - Adopted Dakota</li>
        <li>2007 - Started work as a consultant</li>
        <li>2007 - Graduated U of I</li>
      </ul>
    </>
  )
}

export default Timeline
