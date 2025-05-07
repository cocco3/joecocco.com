import { PropsWithChildren } from 'react'
import styles from './Section.module.css'

type SectionProps = PropsWithChildren & {
  id: string
  heading: string
}

export const Section = ({ id, heading, children }: SectionProps) => {
  return (
    <div className={`${styles.outer} wrapper`}>
      <h2 className={styles.title} id={id}>
        {heading}
      </h2>
      {children}
    </div>
  )
}
