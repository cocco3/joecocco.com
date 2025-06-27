'use client'

import styles from './AppNavList.module.css'
import { AppNav, type AppNavProps } from '../AppNav'
import { useActiveSection } from './useActiveSection'

type AppNavListProps = {
  items: {
    id: string
    nav: AppNavProps
  }[]
}

export const AppNavList = ({ items }: AppNavListProps) => {
  const sectionIds = items.map((x) => x.id)

  const activeId = useActiveSection(sectionIds)

  return (
    <nav>
      <ul className={styles.nav_list}>
        {items.map(({ id, nav }) => (
          <li key={id}>
            <AppNav {...nav} active={activeId === id} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
