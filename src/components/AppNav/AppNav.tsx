import styles from './AppNav.module.css'

export type AppNavProps = React.ComponentPropsWithRef<'a'> & {
  href: string
}

export const AppNav = ({ children, ...props }: AppNavProps) => {
  return (
    <a {...props} className={styles.nav_link}>
      {children}
    </a>
  )
}
