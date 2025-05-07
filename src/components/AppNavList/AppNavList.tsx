import styles from './AppNavList.module.css'
import { AppNav, type AppNavProps } from '../AppNav'

type AppNavListProps = {
  items: {
    id: string
    nav: AppNavProps
  }[]
}

export const AppNavList = ({ items }: AppNavListProps) => {
  return (
    <nav>
      <ul className={styles.nav_list}>
        {items.map(({ id, nav }) => (
          <li key={id}>
            <AppNav {...nav} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
