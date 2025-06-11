import styles from './AppHeader.module.css'
import { AppNavList } from '../AppNavList'
import { useMemo } from 'react'

export const AppHeader = () => {
  const items = useMemo(() => {
    return [
      { id: 'about', nav: { href: '#about', children: 'About' } },
      {
        id: 'experience',
        nav: { href: '#experience', children: 'Experience' },
      },
      { id: 'projects', nav: { href: '#projects', children: 'Projects' } },
      { id: 'videos', nav: { href: '#videos', children: 'Videos' } },
    ]
  }, [])

  return (
    <header className={styles.outer}>
      <div className={`wrapper ${styles.inner}`}>
        <AppNavList items={items} />
      </div>
    </header>
  )
}
