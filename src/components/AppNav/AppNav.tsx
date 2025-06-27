import { clsx } from 'clsx'
import styles from './AppNav.module.css'

export type AppNavProps = React.ComponentPropsWithRef<'a'> & {
  active?: boolean
  href: string
}

export const AppNav = ({ active = false, children, ...props }: AppNavProps) => {
  return (
    <a {...props} className={clsx(styles.nav_link, active && styles.active)}>
      {children}
    </a>
  )
}
