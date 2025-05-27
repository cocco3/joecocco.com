import { PropsWithChildren } from 'react'
import type { CustomCSSProperties } from '../../app/types'
import styles from './ItemGrid.module.css'

type ItemGridProps = PropsWithChildren & {
  autoRepeat?: 'auto-fill' | 'auto-fit'
  gap: string
  minItemWidth: string
}

export const ItemGrid = ({
  autoRepeat = 'auto-fill',
  children,
  gap,
  minItemWidth,
}: ItemGridProps) => {
  const customStyles: CustomCSSProperties = {
    '--grid-auto-repeat': autoRepeat,
    '--grid-gap': gap,
    '--min-item-width': minItemWidth,
  }
  return (
    <div className={styles.itemGrid} style={customStyles}>
      {children}
    </div>
  )
}
