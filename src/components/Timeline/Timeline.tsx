import { PropsWithChildren } from 'react'
import styles from './Timeline.module.css'

type TimelineProps = PropsWithChildren & {
  title: string
}

export const Timeline = ({ children, title }: TimelineProps) => {
  return (
    <div className={styles.outer}>
      <div className={styles.timeline}>
        <div className={styles.circle}></div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </div>
    </div>
  )
}
