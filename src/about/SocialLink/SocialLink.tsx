import React from 'react'
import styles from './SocialLink.module.css'

type SocialLinkProps = {
  ariaLabel: string
  icon: React.ReactNode
  href: string
}

export const SocialLink = ({ ariaLabel, icon, href }: SocialLinkProps) => {
  return (
    <a
      className={styles.socialLink}
      href={href}
      target="_blank"
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  )
}
