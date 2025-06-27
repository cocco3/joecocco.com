import { PropsWithChildren } from 'react'
import styles from './Section.module.css'

type SectionProps = PropsWithChildren & {
  id: string
  heading: string
}

export const Section = ({ id, heading, children }: SectionProps) => {
  return (
    <section id={id} className={`${styles.outer} wrapper`}>
      <h2 className={styles.title}>{heading}</h2>
      {children}
    </section>
  )
}
