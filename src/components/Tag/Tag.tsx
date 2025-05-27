import { PropsWithChildren } from 'react'
import styles from './Tag.module.css'

type TagProps = PropsWithChildren

export const Tag = ({ children }: TagProps) => {
  return <span className={styles.tag}>{children}</span>
}
