import { CSSProperties } from 'react'

export type CustomCSSProperties = CSSProperties & {
  [key: `--${string}`]: string | number
}
